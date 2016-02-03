	//兼容函数一
	//兼容问题：获取classname
	function getClass(classname,obj) {
		var obj=obj||document;
		if(obj.getElementsByClassName){//判断是W3C浏览器
			return obj.getElementsByClassName(classname);//结果返回
		}else{//否则是IE8
			var all=obj.getElementsByTagName("*");//用标签名获取所有元素，是一个集合
			var arr=[];
			for(var i=0;i<all.length;i++){
				if(checkRel(all[i].className,classname)){
					arr.push(all[i]);
				}
			}
			return arr;
		}
	}
	//参数说明：str:多个类名集合以后的字符串
	//          val:想找的类名
	function checkRel(str,val){
		var newarr=str.split(" ");//字符串转换成数组，以空格拆分
		for(var i=0;i<newarr.length;i++){//遍历数组
			if(newarr[i]==val){//如果数组中的值与val相同
				return true;//函数返回true,表示找到
			}
		}
		return false;//如果循环完成后，还没找到，返回false;
	}

	//兼容函数二
	//可以获取与设置纯文本
	//obj:哪个对象用这个方法
	//val:接受第二个实参，表示设置一个文本
	function getText(obj,val){
		if(val==undefined){//获取
			if(obj.innerText){//如果为真IE8浏览器
				return obj.innerText;
			}else{
				return obj.textContent;
			}
		}else{//设置
			if(obj.innerText||obj.innerText==""){//如果为真IE8浏览器
			//当浏览器有innerText这个属性时，或者当对象的内容为空字符串时，都可以给这个对象设置文本
				obj.innerText=val;
			}else{
				obj.textContent=val;
			}
		}	
	}


	//兼容函数三
	//获取样式
	//obj:哪个对象  attr:哪个属性
	function getStyle(obj,attr){
		if(obj.currentStyle){//IE
			return parseInt(obj.currentStyle[attr]);
		}else{//FF
			return parseInt(getComputedStyle(obj,null)[attr]);
		}
	}


	/*$(".box");类名（有下标）
	$("#one");id名
	$("div");标签名（有下标）
	*/

	function $(select,obj){
		var obj=obj||document;
		if(typeof select=="string"){
			select=select.replace(/^\s*|\s*$/g,"");
			if(select.charAt(0)=="."){//类名
				return getClass(select.slice(1),obj);
			}else if(select.charAt(0)=="#"){//id名
				return obj.getElementById(select.slice(1));
			}else if(/^[a-z|1-6]{1,10}$/g.test(select)){
				return obj.getElementsByTagName(select);
			}
		}else if(typeof select=="function"){//表示一个函数
			window.onload=function(){
				select();
			}
		}
	}


	//函数五
	//getChilds(parent);
	//a:获取元素子节点的兼容函数
	//b:获取元素+文本子节点
	function getChilds(parent,type){
		var type=type||"a";
		var childs=parent.childNodes;//获得所有儿子
		var arr=[];
		for(var i=0;i<childs.length;i++){
			if(type=="a"){//获取元素
				if(childs[i].nodeType==1){
					arr.push(childs[i]);
				}
			}else if(type=="b"){//获取元素+文本
				if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
					arr.push(childs[i]);
				}
			}
			
		}
		return arr;
	}


	//函数六
	//获取第一个子节点
	function getFirst(parent){
		return getChilds(parent)[0];
	}

	//函数七
	//获取最后一个子节点
	function getLast(parent){
		return getChilds(parent)[getChilds(parent).length-1];
	}

	//函数八
	//获取指定子节点
	function getNum(parent,num){
		return getChilds(parent)[num];
	}


	//函数九
	//获取下一个兄弟节点
	function getNext(obj){
		var next=obj.nextSibling;
		if(next==null){
			return false;
		}
		while(next.nodeType==3||next.nodeType==8){
			next=next.nextSibling;
			if(next==null){
				return false;
			}
		}
		return next;
	}


	//函数十
	//获取上一个兄弟节点
	function getUp(obj){
		var up=obj.previousSibling;
		if(up==null){
			return false;
		}
		while(up.nodeType==3||up.nodeType==8){
			up=up.previousSibling;
			if(up==null){
				return false;
			}
		}
		return next;
	}

	//函数十一
	//插入到某个对象之后
	//插入到下一个对象之前
	/*找到第二个参数的下一个兄弟节点，将第一个参数插入
	到此兄弟节点之前（插入到下一个对象之前）*/
	Object.prototype.insertAfter=function(obj1,obj2){
		var next=getNext(obj2);
		if(next){
			this.insertBefore(obj1,next);
		}else{
			this.appendChild(obj1);
		}
	}

	
	//函数十二
	//获取滚动条走了的距离
	function getScrollT(){
	  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	  var scrollT=obj.scrollTop;
	  return scrollT;
	}


	//给同一个元素添加多个事件的方法
	//obj:给那个对象添加
	// ev：什么事件
	//   fun：事件处理程序
	function addEvent(obj,ev,fun){
	  if(obj.addEventListener){
	    return obj.addEventListener(ev,
	     function(){
	      fun.call(obj);
	     }
	      ,false);
	  }else{
	      return obj.attachEvent("on"+ev,
	     function(){
	      fun.call(obj);
	     });
	      //在ie8中，this不指当前对象，指的是window 
	  }
	}


	//给同一个元素删除多个事件的方法
	function removeEvent(obj,ev,fun){
	  if(obj.removeEventListener){
	    return obj.removeEventListener(ev,
	     function(){
	      fun.call(obj);
	     }
	      ,false);
	  }else{
	      return obj.detachEvent("on"+ev,
	     function(){
	      fun.call(obj);
	     });
	      //在ie8中，this不指当前对象，指的是window 
	  }
	}


	
	//获取浏览器的宽度
	function getCW(){
		return document.documentElement.clientWidth;
	}

	//获取浏览器的高度
	function getCH(){
		return document.documentElement.clientHeight;
	}

	//拖拽对象
	function drag(obj){
		var cw=getCW();
		//获取浏览器的宽度
	    var ch=getCH();//获取浏览器的高度
	    var ow=obj.offsetWidth;//获取盒子的宽度
	    var oh=obj.offsetHeight;//获取盒子的高度
		obj.onmousedown=function (e){
			var ev=e||window.event;
			var ox=ev.offsetX;
			var oy=ev.offsetY;
			//事件对象阻止浏览器默认行为
			if (ev.preventDefault){
				ev.preventDefault();
				//阻止默认浏览器动作(W3C)
			}
			else{
				ev.returnValue=false;
				//IE中阻止函数器默认动作的方式
			}
			//事件委托的思想
			document.onmousemove=function(e){
				var ev=e||window.event;
				var cx=ev.clientX;
				var cy=ev.clientY;
				var newx=cx-ox;
				var newy=cy-oy;
				if(newx>(cw-ow)){
					newx=cw-ow;
				}
				if(newx<=0){
					newx=0;
				}
				if(newy>(ch-oh)){
					newy=ch-oh;
				}
				if(newy<=0){
					newy=0;
				}
				obj.style.left=newx+"px";
				obj.style.top=newy+"px";

			}
			box.onmouseup=function(){
				document.onmousemove=null;
			}
		}
	}

	//鼠标滑动
	//obj:哪个对象添加滚轮事件
	//upfun:滚轮向上函数
	//downfun:滚轮向下函数
	function mouseWheel(obj,upfun,downfun){
		if(obj.attachEvent){
			obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
		}else if(obj.addEventListener){
			obj.addEventListener("mousewheel",scrollFn,false);
			//chrome,safari -webkit-
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
			//firefox -moz-
		}
		function scrollFn(e){
			var ev=e||window.event;
			if(ev.preventDefault){
				ev.preventDefault(); 
				//阻止默认浏览器动作(W3C)
			}else{
				ev.returnValue = false;
				//IE中阻止函数器默认动作的方式
			}
			var num=ev.detail||ev.wheelDelta;
			if(num==-3||num==120){
				//向上
				if(upfun){
					upfun();
				}
			}
			if(num==3||num==-120){
				//向下
				if(downfun){
					downfun();
				}
			}
		}
	}


	//15.hover
	//判断某个元素是否包含有另外一个元素
	function contains (parent,child) {
	    if(parent.contains){
	       return parent.contains(child) && parent!=child;
	    }else{
	       return (parent.compareDocumentPosition(child)===20);
	    }
	}

	//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
	function checkHover (e,target) {
	    if(getEvent(e).type=="mouseover"){
	        return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
	        !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	    }else{
	        return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
	        !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
	    }
	}
	//鼠标移入移出事件
	/*
	obj   要操作的对象
	overfun   鼠标移入需要处理的函数
	outfun     鼠标移除需要处理的函数
	*/
	function hover (obj,overfun,outfun) {
	    if(overfun){
	        obj.onmouseover=function(e){
	            if(checkHover(e,obj)){
	                overfun.call(obj,[e]);
	            }
	        }
	    }
	    if(outfun){
	        obj.onmouseout=function(e){
	            if(checkHover(e,obj)){
	                outfun.call(obj,[e]);
	            }
	        }
	    }
	}
	function getEvent (e) {
	    return e||window.event;
	}
/*给某个对象设施或获取属性*/
function attr()
{   	//参数格式
    	//1.attr(obj,"aa")
    	//2.attr(obj,{aa:cc})
    	//3.attr(obj,"aa","cc")
    	var obj=arguments[0];
    		if(arguments.length==2)
    		{
                if(typeof arguments[1]=="string")//判断第二个参数的类型
                {
                	return obj.getAttribute(arguments[1]);
                }else if(typeof arguments[1]=="object")
                {    
                    //对象的遍历for in
                	for(var i in arguments[1])
                	{
                	//对象类型，给obj设置对应的属性，下标i表示属性名
	                    if(i!="insertAfter")
	                    {
	                        obj.setAttribute(i,arguments[1][i]);
                    	}
                	}
                }
    		}
    		else if(arguments.length==3)
    		{
    			obj.setAttribute(arguments[1],arguments[2]);
    		}
}



	
window.onload=function()
{
	var topone=$(".dingdh-dingw")[0];
	var xiala1=$(".dingdh-xialabox")[0];
	var diqu=$(".diqu")[0];
	var xiala2=$(".diqubox")[0];
	var arrow=$(".diqu-xiala")[0];
	var topworda=$(".dingdh-b-1")[0];
    var xiala3=$(".dingdh-b-1-xiala")[0];
    var wordone=$(".ones")[0];
    var wordtwobox=$(".dingdh-b-2")[0];
    var wordtwo=$(".scz")[0];
    var xiala4=$(".dingdh-b-2-xiala")[0];
    topone.onmouseover=function()
    {
       xiala1.style.display="block";
    }
    topone.onmouseout=function()
    {
       xiala1.style.display="none";
    }
    diqu.onmouseover=function()
    {
       xiala2.style.display="block";
       arrow.style.backgroundPosition="-288px -85px";
    }
    diqu.onmouseout=function()
    {
       xiala2.style.display="none";
       arrow.style.backgroundPosition="-288px 0px";
    }
    topworda.onmouseover=function()
    {
       topworda.style.borderColor="#ccc";
       topworda.style.background="#fff";
       xiala3.style.display="block";
       wordone.style.color="#e60012";
    }
    topworda.onmouseout=function()
    {
       xiala3.style.display="none";
       wordone.style.color="#666";
       topworda.style.background="#fafafa";
       topworda.style.borderColor="#fafafa";
    }
    var leftb1=$(".dingdh-b-1box")[0];
    wordtwobox.onmouseover=function()
    {
       wordtwobox.style.borderColor="#ccc";
       wordtwobox.style.background="#fff";
       leftb1.style.borderColor="#fafafa";
       xiala4.style.display="block";
       wordtwo.style.color="#e60012";
    }
    wordtwobox.onmouseout=function()
    {
       xiala4.style.display="none";
       wordtwo.style.color="#666";
       wordtwobox.style.background="#fafafa;"
       wordtwobox.style.borderColor="#fafafa";
       leftb1.style.borderColor="#ccc";
    }
    var leftb2=$(".dingdh-b-2box")[0];
    var word3box=$(".dingdh-b-3")[0];
    var word3=$(".sz")[0];
    var xiala5=$(".dingdh-b-3box-xiala")[0];
    word3box.onmouseover=function()
    {
       word3box.style.borderColor="#ccc";
       xiala5.style.display="block";
       word3box.style.background="#fff";
       word3.style.color="#e60012";
       leftb2.style.borderColor="#fafafa";
    }
    word3box.onmouseout=function()
    {
       xiala5.style.display="none";
       word3box.style.background="#fafafa";
       word3box.style.borderColor="#fafafa";
       word3.style.color="#666";
       leftb2.style.borderColor="#ccc";
    }
    var left3=$(".dingdh-b-3box")[0];
    var word4box=$(".dingdh-b-4")[0];
    var word4=$(".kehu")[0];
    var xiala6=$(".dingdh-b-4-xiala")[0];
     word4box.onmouseover=function()
    {
       word4box.style.borderColor="#ccc";
       word4box.style.background="#fff";
       xiala6.style.display="block";
       word4.style.color="#e60012";
       left3.style.borderColor="#fafafa";
    }
    word4box.onmouseout=function()
    {
       xiala6.style.display="none";
       word4.style.color="#666";
       word4box.style.background="#fafafa";
       word4box.style.borderColor="#fafafa";
       left3.style.borderColor="#ccc";
    }
    var left4=$(".dingdh-b-4box")[0];
    var word5box=$(".net")[0];
    var word5=$(".nets")[0];
    var xiala7=$(".dingdh-b-5-xiala")[0];
      word5box.onmouseover=function()
    {
       word5box.style.borderColor="#ccc";
       xiala7.style.display="block";
       word5.style.color="#e60012";
       word5box.style.background="#fff";
       left4.style.borderColor="#fafafa";
    }
    word5box.onmouseout=function()
    {
       xiala7.style.display="none";
       word5box.style.borderColor="#fafafa";
       word5.style.color="#666";
       word5box.style.background="#fafafa";
       left4.style.borderColor="#ccc";
    }
    var wx=$(".dingdh-b-7")[0];
    var xiala8=$(".dingdh-b-7-xiala")[0];
      wx.onmouseover=function()
    {
       xiala8.style.display="block";
    }
    wx.onmouseout=function()
    {
       xiala8.style.display="none";}
    var texts=$(".texts")[0];
    var textsD=$(".texts-xiala")[0];
    var flag=false;
    texts.onfocus=texts.onclick=function()
    {
    	var words=texts.value;
    	if(words=="年度畅销榜，幸福大盘点")
    	{
    		texts.value="";
    	}
      animate(textsD,{height:240});
      flag=true;
    }
    texts.onblur=function()
    {
    	var words=texts.value;
    	if(words=="")
    	{
    		texts.value="年度畅销榜，幸福大盘点";
    	}
    }
    texts.onmouseover=function()
    {
      if(flag)
      {
        animate(textsD,{height:240});
        flag=false;
      }
    }
    textsD.onmouseover=function()
    {
      animate(textsD,{height:240});
    }
    texts.onmouseout=textsD.onmouseout=function()
    {
      animate(textsD,{height:0});
    }
    var gouwu=$(".check-contentf")[0];
    var dengL=$(".denglubox")[0]
    gouwu.onmouseover=function()
    {
      dengL.style.display="block";
    }
    gouwu.onmouseout=function()
    {
      dengL.style.display="none";
    }
    /*搜索框 over*/
    var wordss=$(".texts-xiala-rightb")[0];
    var wordssa=$("a",wordss);
    for(var i=0;i<wordssa.length;i++)
    {
      wordssa[i].index=i;
      wordssa[i].onmouseover=function()
      {
        wordssa[this.index].style.borderColor="#e60012";
      }
      wordssa[i].onmouseout=function()
      {
        wordssa[this.index].style.borderColor="#ccc";
      }
    }
    
    var checkdown=$(".checkdown")[0];
    var checkup=$(".checkup")[0];
    var check=$(".check-cintentcbox-a")[0];
    var checkxiala=$(".checkxiala")[0];
    check.onmouseover=function()
    {
      checkdown.style.display="none";
      animate(checkup,{display:"block",top:12},100);
      checkxiala.style.display="block";
    }
    check.onmouseout=function()
    {
      animate(checkup,{display:"none",top:28},100,function()
        {
          checkdown.style.display="block";
        });
      checkxiala.style.display="none";
    }
    var imgs=$(".banner-imgs");
    var btnsbox=$(".banner-dian-ul")[0];
    var btns=$("li",btnsbox);
    var num=0;
    var bgColor=$(".bannerbox")[0];
    var arr=["#663DD9","#FF4CA7","#F40002","#4C50E5","#FFB200","#2BAEFC","#EE620A","#CC110C"];
    function funL()
    { 
      num++;
      if(num>7)
       {
        num=0;
       }
       for(var i=0;i<imgs.length;i++)
       {
        animate(imgs[i],{opacity:0})
        btns[i].style.background="#ccc";
       }
       animate(imgs[num],{opacity:1},150)
       btns[num].style.background="#ff3c3c";
       bgColor.style.background=arr[num];
    }
    function funR()
    {
      num--;
      if(num<0)
       {
        num=7;
       }
       for(var i=0;i<imgs.length;i++)
       {
        animate(imgs[i],{opacity:0})
        btns[i].style.background="#ccc";
       }
       animate(imgs[num],{opacity:1},150);
       btns[num].style.background="#ff3c3c";
       bgColor.style.background=arr[num];
       
    }
    var times=setInterval(funL,3000);
    for(var i=0;i<btns.length;i++)
    {
      btns[i].index=i;
      btns[i].onmouseover=function()
      {
        clearInterval(times);
        for(var i=0;i<imgs.length;i++)
       {
        animate(imgs[i],{opacity:0})
        btns[i].style.background="#ccc";
       }
       animate(imgs[this.index],{opacity:1});
       btns[this.index].style.background="#ff3c3c";
       bgColor.style.background=arr[this.index];
       
      }
      btns[i].onmouseout=function()
      {
        num=this.index;
      }
    }
    var bannerbox=$(".banner-banner")[0];
    var leftbtn=$(".banner-btnleft")[0];
    var rightbtn=$(".banner-btnright")[0];
    var rightbtnbox=$(".rightbtnbox")[0];
    var leftbtnbox=$(".leftbtnbox")[0];
    bannerbox.onmouseover=function()
    {
      clearInterval(times);
      rightbtnbox.style.display="block";
      leftbtnbox.style.display="block";
      rightbtn.style.display="block";
      leftbtn.style.display="block";
    }
    bannerbox.onmouseout=function()
    {
      times=setInterval(funL,3000);
      rightbtnbox.style.display="none";
      leftbtnbox.style.display="none";
      rightbtn.style.display="none";
      leftbtn.style.display="none";
    }
    rightbtnbox.onclick=function()
    {
      funL();
    }
    rightbtnbox.onmouseover=function()
    {
       rightbtnbox.style.background="rgba(255,255,255,0.1)";
       clearInterval(times);
    }
     rightbtnbox.onmouseout=function()
    {
       rightbtnbox.style.background="rgba(255,255,255,0.3)";
    }
    leftbtnbox.onclick=function()
    {
      funR();
    }
    leftbtnbox.onmouseover=function()
    {
       leftbtnbox.style.background="rgba(255,255,255,0.1)";
       clearInterval(times);
    }
     leftbtnbox.onmouseout=function()
    {
       leftbtnbox.style.background="rgba(255,255,255,0.3)";
    }
    var kuaixun=$(".banner-right-top-word");
    for(var i=1;i<kuaixun.length;i++)
    {
        kuaixun[i].index=i;
        kuaixun[i].onmouseover=function()
        {
          var kuaixunA=$("a",kuaixun[this.index])[0]; 
          kuaixun[this.index].style.color="#e60012";
          kuaixunA.style.color="#e60012";
        }
        kuaixun[i].onmouseout=function()
        {
          var kuaixunA=$("a",kuaixun[this.index])[0];
          kuaixun[this.index].style.color="#666";
          kuaixunA.style.color="#666";
        }
    }
/*1号专享begin*/
    var areaword=$(".areaword");
    var areabox=$(".areabox");
    for(var i=0;i<areabox.length;i++)
    {
      areabox[i].index=i;
      areabox[i].onmouseover=function()
      {
        areaword[this.index].style.color="#E60012";
      }
      areabox[i].onmouseout=function()
      {
        areaword[this.index].style.color="#666";
      }
    }
    var xiaobox=$(".xiaobox")[0];
    var zhuangqud=$(".zhuangqud")[0];
    var huafeichongzhi=$(".word-xia")[0];
    var liuliangchongzhi=$(".word-xia")[1];
    var llbox=$(".llbox")[0];
    var llboxs=$(".llbox-s")[0];
    var hfbox=$(".hfbox")[0];
    var sjbox=$(".sjbox")[0];
    zhuangqud.onmouseover=function()
    {
      animate(xiaobox,{top:0});
    }
    liuliangchongzhi.onmouseover=function()
    {
      llbox.style.display="block";
      llboxs.style.display="block";
      hfbox.style.display="none";
      sjbox.style.display="none";
      liuliangchongzhi.style.color="#E60012";
      huafeichongzhi.style.color="#666";
    }
    huafeichongzhi.onmouseover=function()
    {
      llbox.style.display="none";
      llboxs.style.display="none";
      hfbox.style.display="block";
      sjbox.style.display="block";
      huafeichongzhi.style.color="#E60012";
      liuliangchongzhi.style.color="#666";
    }
    var chongz=$(".chongz")[0];
    var dianK=$(".dianK")[0];
    var qianb=$(".qianb")[0];
    var conbox=$(".xia-bottom-con");
    chongz.onmouseover=function()
    {
      chongz.style.border="1px solid #e60012";
      chongz.style.cssText="width:79px;height:26px";
      chongz.style.borderBottom="none";
      dianK.style.borderTop="1px solid #eee"
      dianK.style.borderRight="1px solid #eee"
      dianK.style.cssText="width:79px;height:25px";
      qianb.style.borderTop="1px solid #eee"
      qianb.style.borderRight="1px solid #eee"
      qianb.style.cssText="width:78px;height:25px";
      for(var i=0;i<conbox.length;i++)
      {
        conbox[i].style.display="none";
      }
      conbox[0].style.display="block";
    }
    var zhuangque=$(".zhuangque")[0];
    zhuangque.onmouseover=function()
    {
      animate(xiaobox,{top:0});
      dianK.style.cssText="width:79px;height:26px;border:1px solid #e60012;border-bottom:none";
      chongz.style.cssText="width:79px;height:25px;border-left:1px solid #eee;border-top:1px solid #eee;border-bottom:1px solid #e60012;border-right:none";
      qianb.style.cssText="width:78px;height:25px;border-top:1px solid #eee;border-right:1px solid #eee;border-bottom:1px solid #e60012";
      for(var i=0;i<conbox.length;i++)
      {
        conbox[i].style.display="none";
      }
      conbox[1].style.display="block";
    }
    dianK.onmouseover=function()
    {
      dianK.style.cssText="width:79px;height:26px;border:1px solid #e60012;border-bottom:none";
      chongz.style.cssText="width:79px;height:25px;border-left:1px solid #eee;border-top:1px solid #eee;border-bottom:1px solid #e60012;border-right:none";
      qianb.style.cssText="width:78px;height:25px;border-top:1px solid #eee;border-right:1px solid #eee;border-bottom:1px solid #e60012";
      for(var i=0;i<conbox.length;i++)
      {
        conbox[i].style.display="none";
      }
      conbox[1].style.display="block";
    }
    var zhuangquf=$(".zhuangquf")[0];
    zhuangquf.onmouseover=function()
    {
      animate(xiaobox,{top:0});
      dianK.style.cssText="width:79px;height:25px;border-top:1px solid #eee;border-bottom:1px solid #e60012;border-right:none";
      chongz.style.cssText="width:79px;height:25px;border:1px solid #eee;border-bottom:1px solid #e60012";
      qianb.style.cssText="width:78px;height:26px;border:1px solid #e60012;border-bottom:none";
      for(var i=0;i<conbox.length;i++)
      {
        conbox[i].style.display="none";
      }
      conbox[2].style.display="block";
    }
    qianb.onmouseover=function()
    {
      dianK.style.cssText="width:79px;height:25px;border-top:1px solid #eee;border-bottom:1px solid #e60012;border-right:none";
      chongz.style.cssText="width:79px;height:25px;border:1px solid #eee;border-bottom:1px solid #e60012";
      qianb.style.cssText="width:78px;height:26px;border:1px solid #e60012;border-bottom:none";
      for(var i=0;i<conbox.length;i++)
      {
        conbox[i].style.display="none";
      }
      conbox[2].style.display="block";
    }
    var chabox=$(".chabox");
    for(var i=0;i<chabox.length;i++)
    {
      chabox[i].onclick=function()
      {
        animate(xiaobox,{top:138});
      }
    }
/*1号专享over*/
/*hot begin*/
var hotDX=$(".hot-dongx");
for(var i=0;i<hotDX.length;i++)
{
  hotDX[i].index=i;
  hotDX[i].onmouseover=function()
  {
    hotDX[this.index].style.right=4+"px";
  }
  hotDX[i].onmouseout=function()
  {
    hotDX[this.index].style.right=0+"px";
  }
}
/*hot over*/
/*floor LB begin*/
 //obj1是图片轮播的盒子
 //obj2是图片盒子中的图片
 //obj3是拉动定位小条
 //obj3是定位在盒子上的固定颜色条
          function xx(obj1,obj2,obj3,obj4)
          {
              var num=0;
              var num1=1;
              var sheed=30;
              function lb()
              {
                if(sheed<=0)
                {
                  sheed=30;
                  num++;
                  if(num>2)
                  {
                    num=0;
                  }
                  for(var k=0;k<obj3.length;k++)
                  {
                    obj3[k].style.left=-30+"px";
                  }
                }
                obj3[num].style.left=-sheed+"px";
                sheed--;
              }
              var time=setInterval(lb,100);
              function lb1()
              {
                if(num1>2)
                {
                  num1=0;
                }
                animate(obj1,{left:-330*num1});
                num1++;
              }
              var time1=setInterval(lb1,3000);
              for(var i=0;i<obj4.length;i++)
              {
                obj4[i].index=i;
                obj2[i].index=i;
                obj2[i].onmouseover=obj4[i].onmouseover=function()
                {
                  clearInterval(time);
                  clearInterval(time1);
                  for(var j=0;j<obj3.length;j++)
                  {
                     obj3[j].style.left=-30+"px";
                  }
                  obj3[this.index].style.left=0+"px"
                  animate(obj1,{left:-330*this.index});
                }
                obj2[i].onmouseout=obj4[i].onmouseout=function()
                {
                  num=this.index;
                  num1=this.index+1;
                  sheed=30;
                  time=setInterval(lb,100);
                  time1=setInterval(lb1,3000);
                }
              }
          }
var imgsbox=$(".big-content-imgsbox");//图片盒子
var imgsbtnBox=$(".imgs-btns");//按钮的盒子
var imgsbtn=$(".imgsbtn",imgsbtnBox[0]);//固定的条状
var imgsbtnBG=$(".imgsbtn-BG",imgsbtnBox[0])//拖动的小条
var imgS=$("img",imgsbox[0]);
for(var i=0;i<imgsbox.length;i++)
{
  var imgsbtn=$(".imgsbtn",imgsbtnBox[i]);
  var imgsbtnBG=$(".imgsbtn-BG",imgsbtnBox[i])
  var imgS=$("img",imgsbox[i]);
  xx(imgsbox[i],imgS,imgsbtnBG,imgsbtn)
}

/*楼层中的小轮播*/





var flashword=$(".flash-w");
var flashimgs=$(".flash-contentbox");
var sanjiao=$(".sanjiao");
var x=1;
function flash()
{
  if(x>2)
  {
    x=0;
  }
   for(var j=0;j<flashword.length;j++)
    {
      flashword[j].style.color="#666";
      flashimgs[j].style.display="none";
      sanjiao[j].style.display="none";
    }
    flashword[x].style.color="#cea145";
    flashimgs[x].style.display="block";
    sanjiao[x].style.display="block";
    x++;
}
var flashtime=setInterval(flash,10000);
for(var i=0;i<flashword.length;i++)
{
  flashword[i].index=i;
  flashword[i].onmouseover=function()
  {
    clearInterval(flashtime);
    for(var j=0;j<flashword.length;j++)
    {
      flashword[j].style.color="#666";
      flashimgs[j].style.display="none";
      sanjiao[j].style.display="none";
    }
    flashword[this.index].style.color="#cea145";
    flashimgs[this.index].style.display="block";
    sanjiao[this.index].style.display="block";
  }
  flashword[i].onmouseout=function()
  {
    x=this.index+1;
    flashtime=setInterval(flash,10000);
  }
}
var Fimage=$(".flash-image");
var ST=$(".ST");
for(var i=0;i<Fimage.length;i++)
{
  Fimage[i].index=i;
  Fimage[i].onmouseover=function()
  {
    clearInterval(flashtime);
    ST[this.index].style.display="block";
  }
  Fimage[i].onmouseout=function()
  {
    flashtime=setInterval(flash,10000);
    ST[this.index].style.display="none";
  }
}
/*floor LB over*/
/*floor turn begin*/
var turns=$(".turns");
var turn=$(".turn");
var turnbox=$(".floor-turn")[0];
var floors=$(".floors");
var turnum;
var onclicknum;
window.onscroll=function()
{
   var scrollT=getScrollT();
   /*document.title=scrollT;*/
   if(scrollT>888)
   {
     turnbox.style.display="block";
   }
   else
   {
     turnbox.style.display="none";
   }
   for(var i=0;i<floors.length;i++)
   {
     if(scrollT>(floors[i].offsetTop)-150)
     {
        for(var j=0;j<turns.length;j++)
        {
          turns[j].style.display="none";
        }
        turns[i].style.display="block";
        /*turns[onclicknum].style.display="block";*/
        turnum=i;
     }
   }
}
for(var i=0;i<turn.length;i++)
{
  turn[i].index=i;
  turn[i].onclick=function()
  {
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
   animate(obj,{scrollTop:floors[this.index].offsetTop-100});
   /*for(var j=0;j<turns.length;j++)
   {
     turns[j].style.display="none";
   }*/
    onclicknum=this.index;
    turns[this.index].style.display="block";
    turns[turnum].style.display="block";
  }
}
for(var i=0;i<turn.length;i++)
{
  turn[i].index=i;
  turn[i].onmouseover=function()
  {
    turns[this.index].style.display="block";
  }
  turn[i].onmouseout=function()
  {
    turns[this.index].style.display="none";
    turns[turnum].style.display="block";
  }
}

var fanh=$(".turn-top")[0];
fanh.onclick=function()
{
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  animate(obj,{scrollTop:0});
}
fanh.onmouseover=function()
{
  turns[10].style.display="block";
}
fanh.onmouseoout=function()
{
  turns[10].style.display="none";
}
var fank=$(".turn-fank")[0];
fank.onclick=function()
{
  open("fankui.html");
}
/*floor turn over*/
/*fashion lb begin*/
var logolbbox=$(".logolbbox")[0];
function logolbleft()
{ 
    var first=getFirst(logolbbox);
    animate(logolbbox,{left:-100},function()
    {
       logolbbox.appendChild(first);
       logolbbox.style.left=0+"px";
    })
}
function logolbright()
{
    var last=getLast(logolbbox);
    var first=getFirst(logolbbox);
    logolbbox.style.left=-100+"px";
    logolbbox.insertBefore(last,first);
    animate(logolbbox,{left:100});
    animate(logolbbox,{left:0});
}
var logoleftbtn=$(".leftbtn")[0];
var logorightbtn=$(".rightbtn")[0];
logoleftbtn.onmouseover=logorightbtn.onmouseover=function()
{
  clearInterval(fashiontime);
}
logoleftbtn.onmouseout=logorightbtn.onmouseout=function()
{
   fashiontime=setInterval(logolbleft,2000);
}
logoleftbtn.onclick=function()
{
  logolbleft();
}
logorightbtn.onclick=function()
{
  logolbright();
}
var fashiontime=setInterval(logolbleft,2000);
/*fashion lb over*/
/*侧导航 开始*/
/*banner cehua begin*/
var wordcehua=$(".word-cehua");
var leftnavbox=$(".leftnavbox");
for(var i=0;i<leftnavbox.length;i++)
{
  leftnavbox[i].index=i;
  leftnavbox[i].onmouseover=function()
  {
    animate(leftnavbox[this.index],{paddingLeft:5,width:205,background:"#872222"},100)
    animate(wordcehua[this.index],{display:"block"},200);
  }
  leftnavbox[i].onmouseout=function()
  {
    animate(leftnavbox[this.index],{paddingLeft:0,width:210,background:"#C23131"},100)
    animate(wordcehua[this.index],{display:"none"},200);
  }
}
/*banner cehua over*/
/*侧导航 结束*/
/*白色遮罩实现以及链接的实现*/
  //var bai=$(".big-content-left-imgs")[0];
  var haha=$(".bai");
  for(var i=0;i<haha.length;i++)
  {
    haha[i].index=i;
    haha[i].onmouseover=function()
    {
      animate(haha[this.index],{opacity:0.3},100,function()
        {
          animate(haha[this.index],{opacity:0});
        });
    }
    haha[i].onclick=function()
    {
      var father=haha[this.index].parentNode;
      var u=$("a",father)[0];
      open(u.href);
    }
    }
/*白色遮罩实现以及链接的实现over*/

   
}
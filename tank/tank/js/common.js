/**
  * auther:zwqi(戚郑伟)
  */
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();
function test()
{
	console.log(path("2-1","10-12"));
	for (var i=0;i<maps.length;i++) {
		var log="";
		for(var j=0;j<maps[0].length;j++)
		{
			log=log+maps[i][j]+",";
		}
		console.log(log);
	}
}
//深拷贝数组
function deepCopy()
{
	var returnMap=new Array();
	for (var i=0;i<maps.length;i++) {
		returnMap[i]=new Array();
		for(var j=0;j<maps[0].length;j++)
		{
			returnMap[i][j]=maps[i][j];
		}
	}
	return returnMap;
}
//定义方向枚举，
var dire={up:0,left:2,down:1,right:3}
//canvas位置转坐标
function canvasToPoint(x,y)
{
	this.canx=parseInt(x/30)-1;
	if(x%30>0)
	{
		this.canx+=1;
	}
	this.cany=parseInt(y/30)-1;
	if(y%30>0)
	{
		this.cany+=1;
	}
	return pathUtilRowaddcol(this.canx,this.cany);
}
//定义标记
function sign(x,y)
{
	var signImage=new Image();
	signImage.src="img/flag.png";
	signImage.onload=function()
	{
		ctx4.drawImage(signImage,x*30,y*30,30,30);
		
	}
}
function signCanvas5(x,y)
{
	var signImage=new Image();
	signImage.src="img/sign.png";
	signImage.onload=function()
	{
		ctx5.drawImage(signImage,x*30,y*30,30,30);
	}
}

/**
  * auther:zwqi(戚郑伟)
  */
//定义存储canvas环境的对象
var ctx1;//背景绘制层
var ctx2;//障碍物绘制层
var ctx3;//玩家绘制层
var ctx4;//玩家控制层
var ctx5;
var player;//定义玩家
var playerRoute=new Array();//生成的玩家路线
var imgBackground=new Image();
var maps=[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,2,2,0,0,1,2,2,2,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
	[1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,2,0,2,1,1,0,1,0,2,2,1],
	[1,1,1,1,0,0,1,2,0,0,0,0,1,1,1,1,1,0,0,0,1,0,2,1,2,2,2,1],
	[1,1,0,0,0,0,0,0,0,1,1,1,2,2,0,2,2,2,2,0,1,0,0,2,1,0,1,1],
	[1,0,0,1,1,1,1,1,1,2,2,0,2,2,2,1,1,2,2,0,2,2,1,1,1,0,0,1],
	[1,0,0,0,1,2,2,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,2,0,0,0,1],
	[1,0,1,0,0,0,2,2,2,0,0,0,0,1,0,1,0,2,2,2,1,0,0,2,2,2,2,1],
	[1,0,0,1,0,2,2,1,2,2,2,2,0,2,2,2,0,1,0,0,0,0,1,0,2,2,2,1],
	[1,0,1,0,2,0,2,2,2,0,0,1,2,2,2,2,0,2,2,2,1,0,0,0,1,0,0,1],
	[1,0,1,0,0,2,2,1,1,2,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1],
	[1,0,0,0,0,2,2,1,2,2,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1],
	[1,0,2,1,0,2,2,1,2,2,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1],
	[1,1,1,0,0,2,2,1,1,2,0,1,0,0,0,1,0,2,1,1,1,1,0,0,0,0,0,1],
	[1,0,1,0,0,2,2,1,2,2,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1],
	[1,2,2,0,0,2,2,1,2,1,0,1,1,1,2,1,0,0,2,1,1,1,0,0,1,0,0,1],
	[1,0,0,2,0,2,2,1,2,2,1,0,0,0,2,0,0,0,0,1,1,1,0,0,0,0,0,1],
	[1,0,0,0,0,2,2,1,2,2,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1],
	[1,0,1,0,0,2,2,1,2,2,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1],
	[1,0,0,0,0,2,2,1,1,2,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1],
	[1,0,2,2,0,2,2,1,2,2,2,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1],
	[1,0,0,0,0,2,2,1,2,2,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1],
	[1,0,0,0,0,2,2,1,2,2,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1],
	[1,0,0,0,0,0,2,2,2,0,0,0,0,0,2,2,2,0,0,0,2,1,2,2,2,1,2,1],
	[1,0,0,0,0,2,2,1,2,2,0,0,2,2,2,0,0,0,2,1,2,2,0,2,1,2,0,1],
	[1,0,0,0,0,0,2,0,2,2,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1],
	[1,0,2,0,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],
	[1,0,1,2,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,1,2,0,0,1],
	[1,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
window.onload=start;

function start()
{
	init();
	gameLoop();
}
function init()
{
	//初始化环境
	var can1=document.getElementById("canvas1");
	var can2=document.getElementById("canvas2");
	var can3=document.getElementById("canvas3");
	var can4=document.getElementById("canvas4");
	var can5=document.getElementById("canvas5");
	ctx1=can1.getContext("2d");
	ctx2=can2.getContext("2d");
	ctx3=can3.getContext("2d");
	ctx4=can4.getContext("2d");
	ctx5=can5.getContext("2d");
	can4.addEventListener("click",clickController,false);
	can4.addEventListener("mousemove",mousemoveController,false);
 	player=new mytank();
 	drawBackground();
 	player.init();
 	//这里画墙和树
 	drawMap();
}

function gameLoop()
{
	window.requestAnimFrame(gameLoop);
	draw();
}

function draw()
{
 	player.draw();
 	player.move();
 	drawState(20,10);
}
function drawBackground()
{
	ctx1.fillStyle="#E8E0C4";
	ctx1.fillRect(0,0,900,900);
}
function drawMap()
{
    var img=new Image();
  	img.src="img/wall.png";
	img.onload=function()
	{
		for (var i=0;i<maps.length;i++) {
			for (var j=0;j<maps[i].length;j++) {
				if(maps[i][j]==1)
				{
					ctx2.drawImage(img,i*30,j*30,30,30);
				}
			}
		}
	}
	var imgTree=new Image();
	imgTree.src="img/tree.png";
	imgTree.onload=function()
	{
		for (var i=0;i<maps.length;i++) {
			for (var j=0;j<maps[i].length;j++) {
				if(maps[i][j]==2)
				{
					ctx2.drawImage(imgTree,i*30,j*30,30,30);
				}
			}
		}
	}
}

function drawState(mystate,enemystate)
{
	//绘制玩家状态
	ctx2.save();
	var images=new Image();
	images.src="img/mytank-up.png";
	images.onload=function()
	{
		ctx2.drawImage(images,270,855,30,30);
	}
	ctx2.restore();
	ctx2.font = "25px Courier New";
	ctx2.fillStyle="black";
	ctx2.fillText("life:"+mystate,330,880,90,40);
	//绘制敌人状态
	ctx2.save();
	var ima=new Image();
	ima.src="img/enemy-up.png";
	ima.onload=function()
	{
		ctx2.drawImage(ima,570,855,30,30);
	}
	ctx2.restore();
	ctx2.font = "25px Courier New";
	ctx2.fillStyle="black";
	ctx2.fillText("life:"+enemystate,630,880,90,40);
	
}


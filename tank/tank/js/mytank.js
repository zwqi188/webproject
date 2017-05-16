/**
  * auther:zwqi(戚郑伟)
  */
var mytank=function(){
	this.x=16;
	this.y=26;
	this.width=30;
	this.height=30;
	this.speed=0.05;
	this.dire=dire.up;
	this.bullet;//子弹图片
	this.life=30;//生命值
	this.boom={};//爆炸图片集合
	this.pic={};//图片集合
	this.ismove=true;
	this.local=pathUtilRowaddcol(this.x,this.y);//此函数用来计算两点之间的路径
}
mytank.prototype.init=function()
{
	var bullet=new Image();
	bullet.src="img/bullet/bullet.gif";
	this.bullet=bullet;
	//初始化玩家
	for(var i=0;i<4;i++)
	{
		//初始化玩家
		switch(i)
		{
			case 0:
			var image0=new Image();
			image0.src="img/mytank-up.png";
			this.pic[0]=image0;
			break;
			case 1:
			var image1=new Image();
			image1.src="img/mytank-bottom.png";
			this.pic[1]=image1;
			break;
			case 2:
			var image2=new Image();
			image2.src="img/mytank-left.png";
			this.pic[2]=image2;
			break;
			case 3:
			var image3=new Image();
			image3.src="img/mytank-right.png";
			this.pic[3]=image3;
			break;
		}
	}
	//初始化玩家死亡
	for (var i=0;i<8;i++) {
		switch(i)
		{
			case 0:
			var boom0=new Image();
			boom0.src="img/boom/boom1.gif";
			this.boom[0]=boom0;
			break;
			case 1:
			var boom1=new Image();
			boom1.src="img/boom/boom2.gif";
			this.boom[1]=boom1;
			break;
			case 2:
			var boom2=new Image();
			boom2.src="img/boom/boom3.gif";
			this.boom[2]=boom2;
			break;
			case 3:
			var boom3=new Image();
			boom3.src="img/boom/boom4.gif";
			this.boom[3]=boom3;
			break;
			case 4:
			var boom4=new Image();
			boom4.src="img/boom/boom5.gif";
			this.boom[4]=boom4;
			break;
			case 5:
			var boom5=new Image();
			boom5.src="img/boom/boom6.gif";
			this.boom[5]=boom5;
			break;
			case 6:
			var boom6=new Image();
			boom6.src="img/boom/boom7.gif";
			this.boom[6]=boom6;
			break;
			case 7:
			var boom7=new Image();
			boom7.src="img/boom/boom8.gif";
			this.boom[3]=boom7;
			break;
		}
	}
}
mytank.prototype.draw=function()
{
	ctx3.clearRect(0,0,900,900);//绘制前先将第三层清除掉
	ctx3.drawImage(this.pic[this.dire],this.x*30,this.y*30,this.width,this.height);
}
mytank.prototype.fire=function()
{
	
}
mytank.prototype.over=function()
{
	
}
mytank.prototype.move=function()
{
	if(this.ismove)
	{
			//通过线路控制方向
		if(playerRoute.length>1)
		{
			var first=playerRoute[0].split('-');
			var second=playerRoute[1].split('-');
			if(parseFloat(second[0])>parseFloat(first[0]))
			{
				this.dire=dire.right;
				if(this.x*31>=parseFloat(second[0])*31)
				{
					playerRoute.splice(0,1);
					this.local=playerRoute[0];
					return;
				}
			}
			else if(parseFloat(second[0])<parseFloat(first[0]))
			{
				this.dire=dire.left;
				if(this.x*30<=parseFloat(second[0])*30)
				{
					playerRoute.splice(0,1);
					this.local=playerRoute[0];
					return;
				}
			}
			else if(parseFloat(second[1])>parseFloat(first[1]))
			{
				this.dire=dire.down;
				if(this.y*31>=parseFloat(second[1])*31)
				{
					playerRoute.splice(0,1);
					this.local=playerRoute[0];
					return;
				}
			}
			else if(parseFloat(second[1])<parseFloat(first[1]))
			{
				this.dire=dire.up;
				if(this.y*30<=parseFloat(second[1])*30)
				{
					playerRoute.splice(0,1);
					this.local=playerRoute[0];
					return;
				}
			}
			switch(this.dire)
			{
				case 0:
				this.y-=this.speed;
				break;
				case 1:
				this.y+=this.speed;
				break;
				case 2:
				this.x-=this.speed;
				break;
				case 3:
				this.x+=this.speed;
				break;
			}
		}
	}
}


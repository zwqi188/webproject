/*
 * 事件控制函数
 */
function clickController(e)
{
	ctx5.clearRect(0,0,900,900);
	var mouseLocation=pathUtilRowsplitcol(canvasToPoint(e.offsetX,e.offsetY));
	if(maps[mouseLocation[0]][mouseLocation[1]]!=1)
	{
		signCanvas5(mouseLocation[0],mouseLocation[1]);
	}
	player.ismove=false;
	playerRoute.length=0;
	//移动过程中，点击会产生位置的偏差，此处重新计算位置
	
	var genroute=path(player.local,canvasToPoint(e.offsetX,e.offsetY)).split(',');
	
	playerRoute.length=genroute.length;
	for (var i=0;i<genroute.length;i++) {
		playerRoute[i]=genroute[i];
	}
	player.ismove=true;
	
	
	//console.log(playerRoute);
}
function dbclickController(e)
{
	
}
function mousemoveController(e)
{
	ctx4.clearRect(0,0,900,900);//绘制前先将第三层清除掉
	var mouseLocation=pathUtilRowsplitcol(canvasToPoint(e.offsetX,e.offsetY));
	if(maps[mouseLocation[0]][mouseLocation[1]]!=1)
	{
		sign(mouseLocation[0],mouseLocation[1]);
	}
}

/**
  * auther:zwqi(戚郑伟)
  */
//地图行数
var maprows;
//地图列数
var mapcols;
//传入三个参数，map为地图，s为起点，e为终点

function path(start,end)
{
	var endgoal=pathUtilRowsplitcol(end);
	if(maps[endgoal[0]][endgoal[1]]==1)
	{
		return null;
	}
	//这个数组是用来输出
	var query=[];
	mapsss= deepCopy();
	pathUtilInit(mapsss);
	query[0]=start;

	for (var i=0;i<query.length;i++) {
		var currentPoint=pathUtilRowsplitcol(pathUtilGetLast(query[i]));
		if(end==pathUtilGetLast(query[i]))
		{
			return query[i];
		}
		if(mapsss[Math.abs(currentPoint[0]-1)][currentPoint[1]]!=1)
		{
			query[query.length]=query[i]+","+pathUtilRowaddcol(Math.abs(currentPoint[0]-1),currentPoint[1]);
			mapsss[currentPoint[0]-1][currentPoint[1]]=1;
		}
		if(parseInt(currentPoint[0])<mapcols && mapsss[parseInt(currentPoint[0])+1][currentPoint[1]]!=1 )
		{
			query[query.length]=query[i]+","+pathUtilRowaddcol(parseInt(currentPoint[0])+1,currentPoint[1]);
			mapsss[parseInt(currentPoint[0])+1][currentPoint[1]]=1;
		}
		if(mapsss[currentPoint[0]][Math.abs(currentPoint[1]-1)]!=1)
		{
			query[query.length]=query[i]+","+pathUtilRowaddcol(currentPoint[0],Math.abs(currentPoint[1]-1));
			mapsss[currentPoint[0]][currentPoint[1]-1]=1;
		}
		if(parseInt(currentPoint[1])+1<maprows && mapsss[currentPoint[0]][parseInt(currentPoint[1])+1]!=1)
		{
			query[query.length]=query[i]+","+pathUtilRowaddcol(currentPoint[0],parseInt(currentPoint[1])+1);
			mapsss[currentPoint[0]][parseInt(currentPoint[1])+1]=1;
		}
		mapsss[currentPoint[0]][currentPoint[1]]=1;
	}
	return null;
}
function pathUtilInit(mapss)
{
	maprows=mapss.length;
	mapcols=mapss[0].length;
}
function pathUtilRowaddcol(row,col)
{
	return row+"-"+col;
}
function pathUtilRowsplitcol(point)
{
	return point.split('-');
}
function pathUtilGetLast(point)
{
	var tempSplit=point.split(',');
	return tempSplit[tempSplit.length-1];
}

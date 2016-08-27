function DelDuplicateStr()
{
	var str=[1,2,3,3,4,4,5,5,6,1,9,3,25,4];
	var obj = new Array;
	var k;
	for(var i=0,l=str.length,k;i<l;i++){
		k=str[i];//获取某一字符
		if(obj[k]){     //obj[k]存在的话,跳到下一次循环,js里面可以用字符做数组的下标
			continue;
		}else{          //obj[k]存在的话
			obj[k]=1;
		}
	}
	
	var tmp = new Array;
	for(var k in obj){
		tmp.push(k);
	}
	alert("删除重复的字符后结果是:"+tmp);
}
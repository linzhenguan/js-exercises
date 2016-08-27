function CountStr()
{
	var str='asdfssaaasasasasaa';
	var obj = new Array;
	for(var i=0,l=str.length,k;i<l;i++){
		k=str.charAt(i);//获取某一字符
		if(obj[k]){     //obj[k],js里面可以用字符做数组的下标
			obj[k]++;
		}else{
			obj[k]=1;
		}
	}
	var m=0; //字符的个数
	var i=null;//最多的是哪个字符
	for(var k in obj){
		if(obj[k]>m){
			m=obj[k];
			i=k;
		}
	}
	alert("最多的字符是:"+i+",个数是:"+m);
} 
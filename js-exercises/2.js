function CountStr()
{
	var str='asdfssaaasasasasaa';
	var obj = new Array;
	for(var i=0,l=str.length,k;i<l;i++){
		k=str.charAt(i);//��ȡĳһ�ַ�
		if(obj[k]){     //obj[k],js����������ַ���������±�
			obj[k]++;
		}else{
			obj[k]=1;
		}
	}
	var m=0; //�ַ��ĸ���
	var i=null;//�������ĸ��ַ�
	for(var k in obj){
		if(obj[k]>m){
			m=obj[k];
			i=k;
		}
	}
	alert("�����ַ���:"+i+",������:"+m);
} 
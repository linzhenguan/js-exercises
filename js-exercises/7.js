function DelDuplicateStr()
{
	var str=[1,2,3,3,4,4,5,5,6,1,9,3,25,4];
	var obj = new Array;
	var k;
	for(var i=0,l=str.length,k;i<l;i++){
		k=str[i];//��ȡĳһ�ַ�
		if(obj[k]){     //obj[k]���ڵĻ�,������һ��ѭ��,js����������ַ���������±�
			continue;
		}else{          //obj[k]���ڵĻ�
			obj[k]=1;
		}
	}
	
	var tmp = new Array;
	for(var k in obj){
		tmp.push(k);
	}
	alert("ɾ���ظ����ַ�������:"+tmp);
}
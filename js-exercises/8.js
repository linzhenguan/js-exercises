function testDom()
{
	TestGetElement("DIV");
	TestGetElement(".imclass");	
	TestGetElement("#imid");	
	

}

function TestGetElement(selectstr) {
	if ( (selectstr == null) || (selectstr == "") || (selectstr == undefined) )
	{
		alert("����Ϊ��!");	
	}
	if (selectstr[0] == ".") //classѡ����
	{
		var tmpstr1 = selectstr.substring(1,selectstr.length);
		console.log("tmpstr="+tmpstr1);
		var classobj= new Array();//������󷵻ص�����
		var classint=0;//����������±�
		var tags=document.getElementsByClassName(tmpstr1);//��ȡ����tmpstr1�ı�ǩ,ע�⣬���ص��Ǹ����飬����ȡ�˵�һ��tags[0]

		if ( (tags[0] == null) || (tags[0] == undefined) )
		{
			alert("not found"+tmpstr);
		}
		else
		{
			tags[0].innerHTML = "imclass";//����
		}
	}
	else if ((selectstr[0] == "#"))  //idѡ����
	{
		var tmpstr2 = selectstr.substring(1,selectstr.length);
		console.log("tmpstr="+tmpstr2);
		var adom2 = document.getElementById(tmpstr2);
		adom2.innerHTML = "imid";
	}
	else //tagNameѡ����
	{
		var tmpstr3 = selectstr;
		console.log("tmpstr3="+tmpstr3);
		var classobj= new Array();//������󷵻ص�����
		var classint=0;//����������±�
		var tags=document.getElementsByTagName(tmpstr3);//��ȡ����div�ı�ǩ,ע�⣬���ص��Ǹ�����
		for(var i in tags){//�Է��ص�����div��ǩ���б���
			if(tags[i].nodeType==1){//�жϽڵ����� 1-ELEMENT 2-ATTRIBUTE 3-TEXT
				if(tags[i].getAttribute("name") == "imtag")//�жϺ���ҪCLASS������ͬ�ģ������һ������
				{
					classobj[0]=tags[i];
					break;
				}
			}
		}

		if ( (classobj[0] == null) || (classobj[0] == undefined) )
		{
			alert("not found tag");
		}
		else
		{
			classobj[0].innerHTML = "imtag";//����
		}
	}
}
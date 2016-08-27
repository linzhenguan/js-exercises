function testDom()
{
	TestGetElement("DIV");
	TestGetElement(".imclass");	
	TestGetElement("#imid");	
	

}

function TestGetElement(selectstr) {
	if ( (selectstr == null) || (selectstr == "") || (selectstr == undefined) )
	{
		alert("输入为空!");	
	}
	if (selectstr[0] == ".") //class选择器
	{
		var tmpstr1 = selectstr.substring(1,selectstr.length);
		console.log("tmpstr="+tmpstr1);
		var classobj= new Array();//定义最后返回的数组
		var classint=0;//定义数组的下标
		var tags=document.getElementsByClassName(tmpstr1);//获取所有tmpstr1的标签,注意，返回的是个数组，我们取了第一个tags[0]

		if ( (tags[0] == null) || (tags[0] == undefined) )
		{
			alert("not found"+tmpstr);
		}
		else
		{
			tags[0].innerHTML = "imclass";//返回
		}
	}
	else if ((selectstr[0] == "#"))  //id选择器
	{
		var tmpstr2 = selectstr.substring(1,selectstr.length);
		console.log("tmpstr="+tmpstr2);
		var adom2 = document.getElementById(tmpstr2);
		adom2.innerHTML = "imid";
	}
	else //tagName选择器
	{
		var tmpstr3 = selectstr;
		console.log("tmpstr3="+tmpstr3);
		var classobj= new Array();//定义最后返回的数组
		var classint=0;//定义数组的下标
		var tags=document.getElementsByTagName(tmpstr3);//获取所有div的标签,注意，返回的是个数组
		for(var i in tags){//对返回的所有div标签进行遍历
			if(tags[i].nodeType==1){//判断节点类型 1-ELEMENT 2-ATTRIBUTE 3-TEXT
				if(tags[i].getAttribute("name") == "imtag")//判断和需要CLASS名字相同的，并组成一个数组
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
			classobj[0].innerHTML = "imtag";//返回
		}
	}
}
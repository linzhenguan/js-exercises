//��ȿ�¡
function deepClone(obj){
    var result,oClass=isClass(obj);
        //ȷ��result������
    if(oClass==="Object"){
        result={};
    }else if(oClass==="Array"){
        result=[];
    }else{
        return obj;
    }
    for(key in obj){
        var copy=obj[key];
        if(isClass(copy)=="Object"||"Array"){
            result[key]=arguments.callee(copy);//�ݹ����
        }else{
            result[key]=obj[key];
        }
    }
    return result;
}
//���ش��ݸ���������������
function isClass(o){
    if(o===null) return "Null";
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
var oPerson={
    oName:"rookiebob",
    oAge:"18",
    oAddress:{
        province:"beijing"
    },    
    ofavorite:[
        "swimming",
        {reading:"history book"}
    ],
    skill:function(){
        console.log("bob is coding");
    }
};
//������ȿ�¡һ������
function testDeepClone(){
	var oNew=deepClone(oPerson);
	oNew.ofavorite[1].reading="picture";
	console.log(oNew.ofavorite[1].reading);//picture
	console.log(oPerson.ofavorite[1].reading);//history book

	oNew.oAddress.province="shanghai";
	console.log(oPerson.oAddress.province);//beijing
	console.log(oNew.oAddress.province);//shanghai
}
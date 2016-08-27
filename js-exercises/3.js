function Car(carname){
 this.carname=carname;
}

function Ferrari(carname){
 this.carname=carname;
}
function objInherit(){
	car.prototype={
	    sayMyName:function(){alert("My Name is "+this.carname);}  
	}
	Ferrari.prototype=new Car();
	var aCar=new Car("Ferrari");
	aCar.sayMyName();
	var aCar2=new Ferrari("Benz");
	aCar2.sayMyName();
}
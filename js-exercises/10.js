function Dog(){  
        this.wow = function(){  
            alert("Wow");  
        }  
        this.yelp = function(){  
            this.wow();  
        }  
}

function MadDog(){  
        this.yelp = function(){  
            var self = this;     //�̳�  
            setInterval(function(){  
                self.wow();  
            },500);  
        }  
} 
function testMadDog(){ 
    MadDog.prototype = new Dog();      //����ԭ��  
    var dog = new Dog();  
    dog.yelp();  
    var maddog = new MadDog();  
    maddog.yelp();
}
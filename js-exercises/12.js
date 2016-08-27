function testPrivateVar(){
  (function(){
    function test(){
        var data;
        data = "aa";
        var self = this;
        this.get = function() {
            return data;
        }
        this.set = function(val) {
            data = val;
            return self;
        }
    }
    window.test = test;
  })();
 
  var obj1 = new test();
  obj1.set("1234");
  console.log(obj1.get());//这里输出设置的值，1234
  
  var obj2 = new test();
  console.log(obj2.data)  //这里会输出undefined
}
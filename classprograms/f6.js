function f1(){
    console.log("inside f1 function")
    return function(x,y){
        return x*y;
    }
}
  // var r1=f1()
  // var r2=r1(5,10);
   //console.log(r2);
   var r =f1()(5,10)
   console.log(r);
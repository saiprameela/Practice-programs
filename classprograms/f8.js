function f1(x,y){
    console.log("inside f1");
     x();
     y();
     console.log("end of f1");
}
 f1(function(){
      console.log("inside 1");
 },
   function() {
         console.log("inside 2")
     }
 );
 
 
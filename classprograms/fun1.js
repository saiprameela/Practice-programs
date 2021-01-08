var f1=function(){
     console.log("f1 function");
}
function f2(x){
    console.log("f2");
    x();
}
f2(f1);


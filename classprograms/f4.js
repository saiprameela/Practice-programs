function f1
(x){
    console.log("f2 function");
    x();
}
f2(function(){
    console.log("dummy function");
})

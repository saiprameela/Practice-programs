function f3(){
    console.log("f2 function");
    return function(){
        console.log("iam function");
    }
}
function f1(){
    console.log("f4 function");
    return f1;
}
f3()();
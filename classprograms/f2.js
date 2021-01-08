function f1(){
    var arr=[14,17,19,20];
    f2(arr);
    console.log(arr);
}
 function f2(x){
 x[0]=40;
 
 x[1]=20;
}
f1();
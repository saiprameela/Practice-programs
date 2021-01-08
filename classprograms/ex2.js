function f1(){
      var a=[0,0,1,0];
      f2(a);
      console.log(a);
}
 function f2(ind){
     ind[0]=1;
     ind[3]=1;
}
f1();
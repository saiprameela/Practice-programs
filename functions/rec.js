function fibno(n){
    if( n==0 )
       return 0;
       else if(n==1)
        return 1;
    return fibno(n-1)+fibno(n-2);
}
var a=fibno(5);
console.log(a);
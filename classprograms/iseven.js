function displayevennum(arr){
for(var index=0;index<arr.length;index++){
     var val=arr[index];
    if(iseven(val)){
        console.log(val,"is even");
       }
    }
}
function iseven(n){
      return n%2==0;
}
displayevennum([2,5,8,6,9]);
var largest_num=function (arr){
var max=arr[0];
for(var i=0;i<arr.length;i++){
if(arr[i]>max){
    max=arr[i];
    }
}
return max;
}
var arr=[12,4,5,13,75,58,96,2];
var a=largest_num(arr);
console.log(a);
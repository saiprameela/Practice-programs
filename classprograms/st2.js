function filterstudentbaseonmarks(arr){
    var newarr = [];
    for (var index=0;index<arr.length;index++){
        var stu=arr[index];
        if( stu.marks>=90){
            newarr.push(stu);
        }
        
    }
    return newarr
}

var sts=[{"id":1,
"name":"prami",
 "marks":80
},
{
    "id":2,
    "name":"padma",
    "marks":95
},
   { "id":3,
    "name":"malu",
    "marks":90
}];
 var filterval=filterstudentbaseonmarks(sts);
 console.log(filterval);
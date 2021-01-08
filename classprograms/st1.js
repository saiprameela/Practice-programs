// var stus={ "id":1,
// "name":"prami",
// "street":"ramalyam",
// "pincode":534112,
// "city": "dubacherla",
// "mobile":[9494704361],
// "is default":"true"};

// console.log[(stus.id)];
// console.log(stus.name);
// console.log(stus.street);
// console.log(stus.pincode);
// console.log(stus.mobile[0]);



var stus=[{ "id":1,
"name":"prami",
"street":"ramalyam",
"pincode":534112,
"city": "dubacherla",
"mobile":[9494704361],
"is default":"true"},
{ "id":2,
"name":"siva",
"street":"ramalyam",
"pincode":534112,
"city": "dubacherla",
"mobile":[9494704361],
"isdefault":"true"},

];
for(var index=0;index<stus.length;index++){
    var stu=stus[index]
    console.log[(stu.id)];
    console.log(stu.name);
    console.log(stu.street);
    for(var i=0;i<stu.mobile.length;i++){
        console.log(stu.mobile[i]);
    }
    console.log( stu .isdefault);
}

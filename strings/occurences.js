function occurences(str){
    val = { }
    str.split('').sort().foreach(e =>{ val[e]=(val[e]?val[e]+1 :1);
    });
    return val;
}
var x = occurences("ravi is playing and he is late to class ")
console.log(x)
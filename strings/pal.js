function palindrome(str){
    for(var i=0;i<l/2;i++){
        if(str[i]!=str[l-1-i]){
            return false;
        }
    }
}
return true;
}

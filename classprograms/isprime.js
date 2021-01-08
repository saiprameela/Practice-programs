function isprime(n){
    var count=0;
    for(var i=1;i<=n;i++){
        if(n%i==0)
            {
                count++;
            }
                if(count>2)
                {
                    break;
                }
    }
      if (count==2)
      {
          return true;
      }   
   }
function prime(n){
    var flag=0;
    for(let i=2;i<(n/2);i++){
        if((n%i)==0){
            console.log(n+'not a prime');
            flag=1;
            break;
        }
    }
    if(flag===0)
    console.log(n+"prime");
}
prime(7);

var prime1=function(n){
    var flag=0;
    for(let i=2;i<(n/2);i++){
        if((n%i)==0){
            console.log(n+'not a prime');
            flag=1;
            break;
        }
    }
    if(flag===0)
    console.log(n+"prime")
}
prime1(8);

(function(n){
    var flag=0;
    for(let i=2;i<(n/2);i++){
        if((n%i)==0){
            console.log(n+'not a prime');
            flag=1;
            break;
        }
    }
    if(flag===0)
    console.log(n+"prime")
}
(8));


var prime4=(n)=>{
    var flag=0;
    for(let i=2;i<(n/2);i++){
        if((n%i)==0){
            console.log(n+'not a prime');
            flag=1;
            break;
        }
    }
    if(flag===0)
    console.log(n+"prime")
}
prime4(78);

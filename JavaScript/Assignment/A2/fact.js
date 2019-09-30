
function fact(n)
{    
     var factval=1;
    if(n==0||n==1)
    {
        console.log(1)
    }
    for(let i=1;i<=n;i++){
        factval=factval*i;
    }
    console.log(factval)
}
fact(5);

var fact1=function(n)
{    
     var factval=1;
    if(n==0||n==1)
    {
        console.log(1)
    }
    for(let i=1;i<=n;i++){
        factval=factval*i;
    }
    console.log(factval)
}
fact1(5);

(function(n)
{    
     var factval=1;
    if(n==0||n==1)
    {
        console.log(1)
    }
    for(let i=1;i<=n;i++){
        factval=factval*i;
    }
    console.log(factval)
}(6));

var fact4=(n)=>
{    
     var factval=1;
    if(n==0||n==1)
    {
        console.log(1)
    }
    for(let i=1;i<=n;i++){
        factval=factval*i;
    }
    console.log(factval)
}
fact4(3)


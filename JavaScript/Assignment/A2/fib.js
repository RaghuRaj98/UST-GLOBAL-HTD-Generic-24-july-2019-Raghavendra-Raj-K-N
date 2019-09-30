function fib(n){
    console.log(0);
    console.log(1);
    let n1=0,n2=1;
    for(let i=2;i<n;i++){
        var n3=n1+n2;
        console.log(n3);
        n1=n2;
        n2=n3;
    }
}
fib(4);
console.log("=================================")
var fib1=function(n){
    console.log(0);
    console.log(1);
    let n1=0,n2=1;
    for(let i=2;i<n;i++){
        var n3=n1+n2;
        console.log(n3);
        n1=n2;
        n2=n3;
    }
}
fib1(4)
console.log("=================================");

(function(n){
    console.log(0);
    console.log(1);
    let n1=0,n2=1;
    for(let i=2;i<n;i++){
        var n3=n1+n2;
        console.log(n3);
        n1=n2;
        n2=n3;
    }
}(5));

console.log("=================================")
var fib3=(n)=>{
    console.log(0);
    console.log(1);
    let n1=0,n2=1;
    for(let i=2;i<n;i++){
        var n3=n1+n2;
        console.log(n3);
        n1=n2;
        n2=n3;
    }
}
fib3(4)
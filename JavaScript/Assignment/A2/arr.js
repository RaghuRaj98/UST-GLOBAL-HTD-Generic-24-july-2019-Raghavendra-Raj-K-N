var a=[10,20,30,40];

function sum(a){
    var sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    console.log(sum)
    
}
sum(a);
console.log("----------------------------------")
var fun=function(a){
    var sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    console.log(sum)
    
}
fun(a);
console.log("----------------------------------");

(function(a){
    var sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    console.log(sum)
    
}(a))
console.log("----------------------------------");
var fun4=(a)=>{
    var sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    console.log(sum)
    
}
fun4(a);

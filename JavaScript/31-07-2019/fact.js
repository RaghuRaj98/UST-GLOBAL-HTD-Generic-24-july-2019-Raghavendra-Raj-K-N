function fact(n)
{
    if(n===0||n===1){
        return 1;
    }else{
        return fact(n-1)*n;
    }
}
let factval=fact(5);
console.log(factval);
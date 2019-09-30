function sum(a,b){
    function addSum(){
        return a+b;

    }
    return addSum;

}
var addSum=sum(10,20);
var total= addSum();
console.log('total', total);

console.log("-----------------");

console.log(window);
console.log(this);
console.log(this===window);
var  name="Rakshith";
console.log(window.name);
console.log(this.name);

var person={
    name:"Dulquer salman",
    age:30,
    getname : function(){
        console.log(this);
        console.log(window);
        return this.name;
    }
}
//with object reference it will change 
console.log(person.getname());


//let and the const keyword
let a;
//let a; we cannot able to declare the let many times
console.log(a)

//when ever we have for loop we use let because to give the block scope
for(var i=0;i<5;i++){
    //var do not have the function scope
    console.log(i);
}

console.log('value of i=' +i);


//const

// const must be declare and inttialized simultaniously

const name1= "Salman"

// name="r" not possible to re initializing 

//var we can re-inttialize rename 
var hobbies=['dancing','singing','cricket'];
console.log('Hobbies==='+hobbies);

var hobbies=['numismatics'];
console.log('Hobbies==='+hobbies);

//let

let fruits=['orange','mango', 'banana'];
console.log(fruits);

//let fruits=['raghu']; //error

//re initialization is possible

fruits=['raghu']
console.log(fruits)

const a12=["raghu",'adi'];
console.log(a12);

//const a12; error

//a12=['saas']; error


let arr=[10,[20,30,40],20,90,80,[30,80]];

console.log(arr);

for(let i=0;i<arr[1].length;i++){
    console.log(arr[i])
}



sum(20,20); // named function cannot be called before declaration 
function sum(num1,num2)
{
    if(num1!==undefined&& num2!==undefined){
        sumval=num1+num2;
        console.log('Sum='+sumval);
    }
}
// add(20,20); annonimous function cannot be called before declaration 

var add=function(nuum1,nuum2){
    if(nuum1!==undefined&& nuum2!==undefined){
        sumval1=nuum1+nuum2;
        console.log('Sum='+sumval1);
    }
}
add(90,10);
//function without name is called as IIFE immediatly invoked function expression

(function(num11,num22){
    if(num11!==undefined&& num22!==undefined){
        sumval2=num11+num22;
        console.log('Sum='+sumval2);
    }
}(10,20)
)


//fat arrow function
var add=(nuum1,nuum2)=>{
    if(nuum1!==undefined&& nuum2!==undefined){
        sumval1=nuum1-nuum2;
        console.log('Sum='+sumval1);
    }
}
add(30,10);

var sum=(num1,num2)=>num1+num2;
console.log(sum(20,50));

var sum=(num)=>num+10;
console.log(sum(10));

//for each function 
var hobbies=['carrom','football','photography','monoacting'];
hobbies.forEach(function(val,index){
    if(val.length>7){
    console.log(val);
    }
});

//28-07-2019 without var keyword

//console.log(myname); throw an error 
myname='chandan';
console.log(myname);

//hoisting means declaring  with the var keyword

console.log(name);
var name="Raj";
function getAge(){
    console.log(age);
    var age=10;
    console.log(age);
}
getAge();

//how to find whether it is a array or not 

console.log(Array.isArray(hobbies));

//includes method 

console.log(hobbies.includes('carrom',2));
console.log(hobbies.includes('carrom'));
//to add new value to array
console.log(hobbies.push("vollyboll",'badmiton'));//return the new size of  the array

//pop method

console.log(hobbies.pop());//return the last value of the array

// to add element at last we use  unshifi method
console.log(hobbies.unshift("skipping",'shopping'));

//to remove element from fist

console.log(hobbies.shift());

//splice element remove ,add to the  array
console.log(hobbies.splice(0,2,'sleeping','singing'));

//slice element give the new array 
console.log(hobbies.slice(0,3));//3 is not included

//convert the array into string with the seperator 
console.log(hobbies.join("---"));

//to ger the index of 
console.log(hobbies.indexOf('skipping'))

//to get the element in perticular index
console.log(hobbies.indexOf('sleeping',2))

console.log(hobbies.indexOf('sleeping'));

//map method

var numbers=[10,20,30,40,50];

//to perform action on perticular element we do use map
var number1=numbers.map(function(val,index){
    val=val+10
    return val;

})

console.log(number1);

//to perform any filter actions we use filter
var numbers2=numbers.filter(function(val){
    return val>10
})
console.log(numbers2);

var items=[
    {
        name:'lipstick',
        price:95,
        id:1
    },
    {
        name:'perfume',
        price:500,
        id:2
    },
    {
        name:'watch',
        price:1000,
        id:3
    },
    {
        name:'shoe',
        price:2000,
        id:4
    }
]

var newitem=items.map(function(item){
    item.price=item.price+100;
    return item
})

console.log(newitem);

var newitem1=items.filter(function(item){
    return item.price>90 && item.name.length>7;
})
console.log(newitem1);
console.log(items);

//strings methods






















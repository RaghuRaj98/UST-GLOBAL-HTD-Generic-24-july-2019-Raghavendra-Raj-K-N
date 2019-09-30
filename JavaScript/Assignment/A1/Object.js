var student={
    name:'raghu',
    age:20,
    sid:'s1'
}
console.log(student);

var employee={
    name:'Raghu',
    company:"xyz"
}
console.log(employee);
var person={
    name:"ram",
    age:50
}
console.log(person);

var car={
    model:"a1",
    company:"Audi"
}
console.log(car);

var bike={
    name:"ns200",
    company:"bajaj"
}
console.log(bike);

var student1=new Object();
student1.name="Raghu";
student1.age=21;
console.log(student1)

var employee1=new Object();
employee1.name="Ram";
employee1.age=50;
console.log(employee1)

var person1=new Object();
person1.name="Raj";
person1.age=22
console.log(person1)

var chikkamagaluru=new Object();
chikkamagaluru.v1="Mullayanagiri"
chikkamagaluru.v2="baba-budangiri"
console.log(chikkamagaluru)

var car1=new Object();
car1.model="c2"
car1.company="benz"
console.log(car1)

var fruits=['mango','banana','orange']

var hero=['yesh','darshan','sudeep']

var laptop=['dell','hp','lenovo']

var names= ['Raghu','Raj','Ram']

var cars=['tata','maruti suzuki','hyundai']

var fruits1=new Array('mango','banana','orange');
var hero1=new Array('yesh','darshan','sudeep');
var laptop1=new Array('dell','hp','lenovo');
var names1= new Array('Raghu','Raj','Ram');
var cars1=new Array('tata','maruti suzuki','hyundai');


function print(array){
    for(let i=0;i<array.length;i++){
       console.log( array[i])
    }

}

print(fruits)
print(hero)
print(laptop)
print(names)
print(cars)
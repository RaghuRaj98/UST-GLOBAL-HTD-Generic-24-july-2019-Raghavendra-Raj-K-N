
var hobbies=['cricket','football','photography'];
hobbies.forEach(function(val,index){
    if(val.length>7){
    console.log(val);
    }
});





console.log(Array.isArray(hobbies));


console.log(hobbies.includes('carrom',2));
console.log(hobbies.includes('carrom'));

console.log(hobbies.push("singing",'skipping'));



console.log(hobbies.pop());



console.log(hobbies.unshift("skipping",'shopping'));



console.log(hobbies.shift());


console.log(hobbies.splice(0,3,'bikeriding','music'));


console.log(hobbies.slice(0,3));


console.log(hobbies.join("---"));


console.log(hobbies.indexOf('skipping'))


console.log(hobbies.indexOf('music',2))

console.log(hobbies.indexOf('bikeriding'));



var numbers=[100,200,300,400,500];


var number1=numbers.map(function(val,index){
    val=val+100
    return val;

})

console.log(number1);


var numbers2=numbers.filter(function(val){
    return val>200
})
console.log(numbers2);


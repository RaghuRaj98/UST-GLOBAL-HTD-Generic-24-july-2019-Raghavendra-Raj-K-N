let pElement=document.getElementById('demo');
console.log(pElement)
pElement.textContent= 'this is new p tag'

//getElement By Classname()

let divElements= document.getElementsByClassName('blue');
console.log(divElements);

let pElements= document.getElementsByTagName('p');
console.log(pElements);

let nameElement=document.getElementsByName('helement');
console.log(nameElement);

let demoElement=document.querySelector('#demo');
console.log(demoElement);

let blueClassElement= document.querySelectorAll('.blue');
console.log(blueClassElement);

let buttonElem=document.createElement('button');
buttonElem.textContent='Click me';

console.log(buttonElem);

document.body.appendChild(buttonElem);

let spanEle=document.getElementById("spanid");
spanEle.style.color="pink";

let buttonElement1=document.getElementById("buttonEle");
buttonElement1.className='add';



let table1=document.createElement("TABLE");
let tr1=document.createElement("tr");
let trd1=document.createElement("td");
trd1.textContent('NAME');
let trd2=document.createElement("td");
trd2.textContent('AGE');

tr1.appendChild(trd1);
tr1.appendChild(trd2);

document.getElementById('tableid').innerHTML=
`<table>
    <tr>
        <td>Name</td>
        <td>Age</td>
    </tr>
    <tr>
        <td>Raghu</td>
        <td>21</td>
    </tr>
    <tr>
        <td>Aditya</td>
        <td>22</td>
    </tr>

</table>`;





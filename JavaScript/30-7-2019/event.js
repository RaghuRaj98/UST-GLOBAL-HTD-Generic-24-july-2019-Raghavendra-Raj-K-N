function sayhello(){
    alert('hello');
}


let buttonElement=document.getElementById('bt');
buttonElement.onclick=function(){
    alert("hello world")
}

function createPElement(){
    let pElementData=document.createElement('p');
    pElementData.textContent='raghu';
    document.body.appendChild(pElementData);
}

let paraElement=document.getElementById('alertHI');
paraElement.addEventListener('click',function(){
    alert("this is a event listener");
});
function showText(){
let inputEle=document.getElementById("showData");
console.log(inputEle.value);
let h1Element=document.createElement('h1');
h1Element.textContent=inputEle.value;
document.body.appendChild(h1Element);
}

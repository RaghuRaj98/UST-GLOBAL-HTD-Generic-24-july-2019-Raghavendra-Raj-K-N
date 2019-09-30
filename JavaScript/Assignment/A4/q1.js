var orderedlist=document.createElement("ol");
var list1=document.createElement("li");
orderedlist.appendChild(list1)
var text1=document.createTextNode("raghu");
list1.appendChild(text1)

var list2=document.createElement("li");
orderedlist.appendChild(list2)
var text2=document.createTextNode("raj");
list2.appendChild(text2)

var list3=document.createElement("li");
orderedlist.appendChild(list3)
var text3=document.createTextNode("ram");
list3.appendChild(text3)

var unorderedlist=document.createElement("ul");
var list1=document.createElement("li");
unorderedlist.appendChild(list1)
var text1=document.createTextNode("raghu");
list1.appendChild(text1)

var list2=document.createElement("li");
unorderedlist.appendChild(list2)
var text2=document.createTextNode("raj");
list2.appendChild(text2)

var list3=document.createElement("li");
unorderedlist.appendChild(list3)
var text3=document.createTextNode("ram");
list3.appendChild(text3)

var div2=document.getElementById("div1");
div2.appendChild(orderedlist);
div2.appendChild(unorderedlist);

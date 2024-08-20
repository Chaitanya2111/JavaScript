var newElemnt = document.createElement("li");
var newText = document.createTextNode("Chaitanya");


newElemnt.appendChild(newText);

var target = document.getElementById("list");
var oldElement = target.children[0];

target.replaceChild(newElemnt,oldElement);




var target = document.getElementById("list");
var oldElement = target.children[2];

target.removeChild(oldElement);






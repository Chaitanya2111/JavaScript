/*var newElemnt = document.createElement("h2");

var newText = document.createTextNode("I am chaitanya");

newElemnt.appendChild(newText);*/

var target = document.getElementById("test");

var newElemnt = "<h2>I am Chaitanya </h2>";

// target.insertAdjacentElemnt("beforebegin",newElemnt);

target.insertAdjacentHTML("afterbegin",newElemnt);



var target = document.getElementById("test");

var newText = "this is heading";

target.insertAdjacentHTML("afterend",newText);


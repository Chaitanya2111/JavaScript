var newElemnt = document.createElement("p");

var newText =document.createTextNode("This is just text");

newElemnt.appendChild(newText);

document.getElementById("test").appendChild(newElemnt);
console.log(newElemnt);




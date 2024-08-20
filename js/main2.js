var element;

document.querySelector("#head").innerHTML = "<h1>hii</h1>";
console.log(element);


element = document.querySelector(".list");
console.log(element);


element = document.querySelectorAll(".list");
console.log(element);


element = document.querySelectorAll(".list")['0'].innerHTML;
console.log(element);
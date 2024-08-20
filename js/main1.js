 
//  how to get dom value the follwing methods are used to get dom value.
 
 var element;

 element = document.getElementById("content").innerText;  

 console.log(element);



 var element;

 element = document.getElementById("head").innerHTML;  

 console.log(element);




 var element;

 element = document.getElementById("head").getAttribute("style");  

 console.log(element);


 var element;

 element = document.getElementById("head").getAttributeNode("style").value;  

 console.log(element);




 var element;

 element = document.getElementById("head").attributes[2].name;  

 console.log(element);


 var element;

 element = document.getElementById("head").attributes[2].value;  

 console.log(element);



//  how to set dom value the follwing methods are used to set dom value.


var element;

 element = document.getElementById("head").innerText = "wow";  

 console.log(element);


 var element;

 element = document.getElementById("head").innerHTML="<h1>wow</h1>";  

 console.log(element);



 var element;

 element = document.getElementById("head"). innerHTML="<h1>wow</h1>";  

 console.log(element);
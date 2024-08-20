 var element;

 document.getElementById("head").onclick =abc;

 function abc(){
     document.getElementById("head").style.background ="skyblue";
 }




 var element;

 document.getElementById("menu").onmouseenter =xyz;

 function xyz(){
     document.getElementById("menu").style.background ="green";
 }



 var element;

 document.getElementById("sidebar").addEventListener("mouseenter",cr);
 document.getElementById("sidebar").addEventListener("click",function(){
   this.style.border="5px solid red";

 });

 function cr(){
     document.getElementById("sidebar").style.background ="yellow";
 } 


 document.getElementById("sidebar").addEventListener("mouseenter",cr);

 function cr(){
     document.getElementById("sidebar").removeEventListener("mouseenter",cr)
 }

 

 
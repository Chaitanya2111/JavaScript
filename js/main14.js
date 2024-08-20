 var target = document.getElementById("list").children[0];
 var copyElement = target.cloneNode(true);

 console.log(copyElement);

 document.getElementById("list1").appendChild(copyElement);



 
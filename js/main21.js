var id = setTimeout(sonu,3000);

function sonu(){
    var target = document.getElementById("test");
    target.style.width = "700px";
}


function stopAnimation(){
    clearTimeout(id);
}
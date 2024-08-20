/*setInterval(Anim,1000);
// 1000 milisecond = 1sec
function Anim(){

console.log("hello");
}*/



var a= 0;

setInterval(sonu,500);

function sonu(){
    a = a + 10;

    var target =document.getElementById("test");
    target.style.marginLeft = a + 'px';
}

/*var a = 0
var id = setInterval(monu,500);

function monu(){
    a = a + 10;
    if(a == 200){
        clearInterval(id);
    }else{
        var target =document.getElementById("test");
        target.style.marginLeft = a + 'px';
    }
}*/
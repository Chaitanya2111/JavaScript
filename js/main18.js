/*function focusFunction(){

    document.getElementById("fname").style.background ="yellow";
}


function blurFunction(){

    document.getElementById("fname").style.background = "";
}*/


function focusFunction(element){
    element.style.background="yellow";
}


function blurFunction(element){
    element.style.background="";

}

    function inputFunction(element){
        var a = element.value;
        document.getElementById("test").innerHTML = a;
    }

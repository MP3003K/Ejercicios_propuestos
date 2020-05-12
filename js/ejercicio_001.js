
var x;
var res =document.getElementById("result") ;

function calcular() {
    x=parseInt(document.getElementById("n1").value);
    x=(((x)*(x+1)*((2*x)+1))/6);
    res.value=x;
}
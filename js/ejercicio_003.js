var x, y, c = 1;
var res = document.getElementById("result");

function calcular(){
x = parseInt(document.getElementById("n1").value);
y = parseInt(document.getElementById("n2").value);

if (x < 16) {
    res.value = "Tu no debes trabajar"
} else {
    if (15 < x & x < 19) {
        x = 1;
    } else {
        if (18 < x & x < 51) {
            x = 1.05;
        }
        else {
            if (50 < x & x < 61) {
                x = 1.1;
            }
            else {
                if (60 < x) {
                    x = 1.15
                }
            }

        }

        x = x * y;
        res.value = x;
    }

}
}






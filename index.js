let bt1 = document.getElementById("b1");
let bt2 = document.getElementById("b2");
let bt3 = document.getElementById("b3");
let cl1 = document.getElementById("clr1");
let cl2 = document.getElementById("clr2");
let cl3 = document.getElementById("clr3");

bt1.addEventListener("click", red);
bt2.addEventListener("click", yellow);
bt3.addEventListener("click", green);


function red() {
    cl1.style.backgroundColor = "red";
    bt2.style.backgroundColor = "black";
    cl2.style.backgroundColor = "grey";
    bt3.style.backgroundColor = "black";
    cl3.style.backgroundColor = "grey";
}

function yellow() {
    cl2.style.backgroundColor = "yellow";
    bt1.style.backgroundColor = "black";
    cl1.style.backgroundColor = "grey";
    bt3.style.backgroundColor = "black";
    cl3.style.backgroundColor = "grey";
}

function green() {
    cl3.style.backgroundColor = "green";
    bt1.style.backgroundColor = "black";
    cl1.style.backgroundColor = "grey";
    bt2.style.backgroundColor = "black";
    cl2.style.backgroundColor = "grey";
}
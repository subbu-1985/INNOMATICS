function addTwo() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let sum = n1 + n2;
    document.getElementById("res").value = sum;
}

// 
function avg() {
    let n1 = parseInt(document.getElementById("a").value);
    let n2 = parseInt(document.getElementById("b").value);
    let n3 = parseInt(document.getElementById("c").value);
    let sum = n1 + n2 + n3;
    let average = sum / 3;
    document.getElementById("result").value = average;
}


function sum(){
    let n = parseInt(document.getElementById("x").value);
    let sum = n * (n + 1) / 2;
    document.getElementById("output").value = sum;
}


function avgofn() {
    let n = parseInt(document.getElementById("y").value);
    let sum = n * (n + 1) / 2;
    let average = sum / n;
    document.getElementById("output1").value = average;
}


function missing_angle() {
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    let missingAngle = 180 - (a + b);
    document.getElementById("c1").value = missingAngle;
}


function per() {
    let sp = parseInt(document.getElementById("sp").value);
    let cp = parseInt(document.getElementById("cp").value);
    let profitPercentage = ((sp - cp) / cp) * 100;
    document.getElementById("p").value = profitPercentage;
}


function simpleinterest() {
    let p = parseInt(document.getElementById("pa").value);
    let t = parseInt(document.getElementById("t").value);
    let r = parseInt(document.getElementById("r").value);
    let SI = (p * t * r) / 100;
    document.getElementById("si").value = SI;
}
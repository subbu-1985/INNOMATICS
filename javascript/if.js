//positive or negative
function positive(){
    let num1 = parseInt(document.getElementById("a1").value);
    if(num1>0){
        document.getElementById("a2").value = 
        "given number positive";
    }
    else{
        document.getElementById("a2"). value=
        "given negative";
    }
}

//smaller number
function smaller(){
    let a1 = parseInt(document.getElementById("n1").value);
    let a2 = parseInt(document.getElementById("n2").value);
    if(a1<a2){
        document.getElementById("a").value =
        "given number is smaller than a1" ;
    }
    else{
       document.getElementById("a").value =
        "given number is smaller than a2" ; 
    }
}

//divisible by 5
function divisible(){
    let num2 = parseInt(document.getElementById("b").value);
    if(num2%5==0){
        document.getElementById("b1").value =
        "given is divisible by 5";
    }
    else{
        document.getElementById("b1").value =
        "given is not divisible by 5"
    }
}

//even  or odd
function even(){
    let number = parseInt(document.getElementById("c").value);
    if(number%2==0){
        document.getElementById("c1").value =
        "given is a even";
    }
    else{
        document.getElementById("c1").value =
        "given is a odd"
    }
}

//Bill Amount and Discount
function bill(){
    let bill = parseInt(document.getElementById("amount").value);
    if(bill>5000){
        let discount = bill * 20 / 100;
        let finalBill = bill - discount;
        document.getElementById("d1").value =
        "bill :" +bill+ "discount :" +discount;
        "finalbill :" +finalbill;
    }
    else{
        document.getElementById("d1").value=
        "bill: " + bill + ", No Discount, Final bill: " + bill;

    }
}
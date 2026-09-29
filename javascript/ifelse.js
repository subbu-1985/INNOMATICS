function vowelornot(){
    let ch=document.getElementById("n1").value;
    let res;
    if(ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"||ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        res="VOWEL!!!!";
        }else{
            res="Not a Vowel!!!!"
        }
        document.getElementById("res1").value=res;
}

// ====================================================
function range(){
    let val=document.getElementById("n2").value;
    let res;
    if(val>=20 && val<=25){
        res="In Range";
    }
    else{
        res="Not in Range";
    }
    document.getElementById("res2").value=res;
}
// ====================================================
function uppercase(){
    let ch=document.getElementById("n3").value;
    if(ch>="A" && ch<="Z"){
        res="Uppercase";
    }
    else{
        res="Not Uppercase";
    }
    document.getElementById("res3").value=res;
}
// ====================================================
function lowercase(){
    let ch=document.getElementById("n4").value;
    if(ch>="a" && ch<="z"){
        res="Lowercase";
    }
    else{
        res="Not Lowercase";
    }
    document.getElementById("res4").value=res;
}
// ====================================================
function alphabet(){
    let val=document.getElementById("n5").value;
    if((val>="a" && val<="z") || (val>="A" && val<="Z")){
        res="Alphabet";
    }
    else{
        res="Not a Alphabet";
    }
    document.getElementById("res5").value=res;
}
// ====================================================
function digit(){
    let val=document.getElementById("n6").value;
    if(val>=0 && val<=9){
        res="Digit";
    }
    else{
        res="Not a Digit";
    }
    document.getElementById("res6").value=res;
}
// ====================================================
function login(){
    let uName=document.getElementById("n7").value;
    let uPass=document.getElementById("n8").value;

    if(uName=="Pavan" && uPass=="P@666"){
        res="Login Successfull!!!!!!!";
    }
    else{
        res="Invalid Credentails";
    }
    document.getElementById("res7").value=res;
}
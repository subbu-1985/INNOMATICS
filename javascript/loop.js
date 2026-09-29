function table() {
  let n = document.getElementById("n1").value;
  let res = "";
  for (let i = 1; i <= 10; i++) {
    res = res + (n + " X " + i + ": " + n * i) + "\n";
  }
  document.getElementById("res1").value = res;
}
function natural(){
    
let sum=0;
let val=parseInt(document.getElementById("natural").value);
for(let i=1;i<=val;i++){
    sum=sum+i;    
}
    document.getElementById("result").value=sum;
}


function factorial(){
    let fact=1;
let a=parseInt(document.getElementById("factorial").value)
for(let i=a;i>=1;i--){
    fact=fact*i;
}
document.getElementById("result3").value=fact;
}
function fibanocci() {
    let n1 = 0;
    let n2 = 1;
    let n = parseInt(document.getElementById("fibanocci").value);
    let res = "";

    for (let i = 1; i <= n; i++) {

        res += n1 + " \n ";

        let temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }

    document.getElementById("result4").value = res;
}
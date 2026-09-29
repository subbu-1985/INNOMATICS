//number positive or negitive or zero
function checknum(){
    let n=10;
    if(n>0){
        console.log("positive");
    }else if(n<0){
        console.log("Negative");
    }
    else{
        console.log("Zero");
    }
}
checknum();

// 2.) even or odd
function evenodd(){
    let n=10;
    if(n%2==0){console.log(n +" is even");}
    else{console.log(n+" is odd");}
}
evenodd();

//3.) smallest of 3 numbers
function smallest(){
    let a=25;
    let b=10;
    let c=18;
    if(a<b&&a<c){console.log(a+" is smallest")}
    else if(b<a&&b<c){console.log(b+" is smallest")}
    else{console.log(c+" is smallest")}
}
smallest();

//4.)10 to 1
function numbers(){
    for(let i=10;i>=1;i--){
        console.log(i);
    }
}
numbers();

//5.)multiplication 7
function table(){
    let n=7;
    for(let i=1;i<=10;i++){
        console.log(n+"x"+i+"="+(n*i));
    }
}
table();

//6.)sum of odd numbers
function sumodd(){
    let sum=0;
    for(let i=1;i<=100;i++){
        if(i%2!=0){
            sum=sum+i;
        }
    }
    console.log(sum);
}
sumodd();

//7.)factorial of 6
function facto(){
    let n=6;
    let fact=1;
    while(n>0){
        fact=fact*n;
        n--;
    }
    console.log(fact);
}
facto();

//8.)count factors
function cfact(){
    let n=60;
    let count=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    console.log(count);
}
cfact();

//9.)sum of factors
function factsum(){
    let n=56;
    let sum=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}
factsum();

//10.) armstrong
function armstrong(){
    let n=153;
    let temp=0;
    let sum=0;
    while(temp>0){
        let digit=temp%10;
        sum=sum+digit*digit*digit;
        temp=parseInt(temp/10);

    }
    if(sum==n){console.log("Armstrong number");}
    else{console,log("Not Aramstrong number");}
}
armstrong();

//11.)prime numbers
function prime(){
    for(let n=50;n<=150;n++){
        let count=0;
        for(let i=1;i<=n;i++){
            if(n%i==0){
                count++;
            }
        }
        if(count==2){
            console.log(n);
        }
    }
}
prime();

//12.)largest prime
function largeprime(){
    let largest=0;
    for(let n=1;n<=100;n++){
        let count=0;
        for(let i=1;i<=n;i++){
            if(n%i==0){
                count++;
            }
        }
        if(count==2){
            largest=n;
        }
    }
    console.log(largest);
}
largeprime();

//13.)perfect number
function perfect(){
    for(let n=1;n<=1000;n++){
        let sum=0;
        for(let i=1;i<=n;i++){
            if(n%i==0){
                sum=sum+i;
            }
        }
        if(sum==n){
            console.log(n);
        }
    }
}
perfect();

//14.)sum of digits
function sum(){
    let n=987654;
    let sum=0;
    do{
        let digit=n%10;
        sum=sum+digit;
        n=parseInt(n/10);
    }while(n>0){
        console.log(sum);
    }
}
sum();

//15.)number pattern
function pattern(){
    for(let i=5;i>=1;i--){
        let str="";
        for(let j=5;j>=i;j--){
            str=str+i;
        }
         console.log(i);
    }
}
pattern();
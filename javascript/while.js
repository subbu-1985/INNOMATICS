//while
//1.)sum of digits
let n=738;
let sum=0;
while(n>0){
    let digit=n%10;
    sum=sum+digit;
    n=parseInt(n/10);
}
console.log("Sum of digits =",sum);

//Average of digits
let m=624;
let su=0;
let count=0;
while(n>0){
    let digit=n%10;
    su=su+digit;
    count++;
    m=parseInt(n/10);
}
let average=su/count;
console.log("Average of digits=",average);

//3. Sum of first digit and last digit
let a=936;
let original=a;
let lastdigit=a%10;
while(a>=10){
    a=parseInt(a/10);
}
let firstdigit=a;
let sm=firstdigit+lastdigit;
console.log("First digit =", firstdigit);
console.log("Last digit =", lastdigit);
console.log("Sum =", sm);

//4. Average of digits divisible by 5
let b = 12575;
let s= 0;
let cou = 0;
while (b > 0) {
    let digit = b % 10;
    if (digit % 5 == 0) {
        s = s + digit;
        cou++;
    }
    b = Math.floor(n / 10);
}
if (cou > 0) {
    let average = s / cou;
    console.log("Average =", average);
} else {
    console.log("No digit is divisible by 5");
}

//5. Difference between largest and smallest digit
let c=54798;
let lar=0;
let sma=9;
while(c>0){
    let dig=c%10;
    if(dig>lar){
        lar=dig;
    }
    if(dig<sma){
        sam=dig;
    }
    n=parseInt(c/10);
}
let diff=lar-sma;
console.log("largest digit=",lar);
console.log("smallest digit=",sma);
console.log("difference=",diff);

//for logics in while
let n = 1;
while (n <= 3) {
    clg("Hello");
    n = n + 1;
}

let n = 1;
while (n <= 5) {
    clg(n);
    n = n + 1;
}

let n = 5;
while (n >= 1) {
    clg(n);
    n = n - 1;
}

let n = 100;
while (n >= 50) {
    clg(n);
    n = n - 10;
}

let n=1;
let sum=0;
while(n<=3){
    sum=sum+10;
    n=n+1;
}
clg(sum);

let n=1;
while(n<=10){
    clg(2*n)
    n=n+1;
}

let n=4;
let fact=1;
while(n>=1){
    fact=fact*i;
    n=n-1;
}
clg(fact);

let a=0;
let b=1;
clg(a);
clg(b);
let sum=0;
let n=1;
while(n<=5){
    sum=a+b;
    a=b;
    b=sum;
    clg(sum);
    n=n+1;
}

let n = 1;
while (n <= 5) {
    if (n % 2 == 0) {
        clg(n);
    }
    n = n + 1;
}

let n = 10;
while (n >= 5) {
    if (n % 2 != 0) {
        clg(n);
    }
    n = n - 1;
}

let n = 10;
while (n <= 15) {
    if (n % 5 == 0) {
        clg(n);
    }
    n = n + 1;
}

let n = 1;
let sum = 0;
while (n <= 5) {
    if (n % 2 == 0) {
        sum = sum + n;
    }
    n = n + 1;
}
clg(sum);

let n = 1;
let count = 0;
while (n <= 5) {
    if (n % 2 != 0) {
        count = count + 1;
    }
    n = n + 1;
}
clg(count);

let num = 6;
let count = 0;
let n = 1;
while (n <= num) {
    if (num % n == 0) {
        count++;
    }
    n = n + 1;
}
if (count == 2) {
    clg("num is prime");
} else {
    clg("num is not prime");
}

let num = 6;
let n = 1;
let sum = 0;

while (n < num) {
    if (num % n == 0) {
        sum = sum + n;
    }
    n = n + 1;
}

if (sum == num) {
    clg("num is perfect number");
} else {
    clg("num is not perfect");
}
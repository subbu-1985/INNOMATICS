//1.)divisible by both 3 and 5
function check(sum){
    if(num%3==0 && num%5==0){
        console.log(num+"divisible ny both 3 nad 5");
    }else{console.log(num+"not divisible by both");}
}
check(10);

//2.)vote age
function vote(age){
    if(age>=18){console.log("Eligible to vote");}
    else{console.log("Not eligible to vote");}
}
vote(20);

//3.)middle number
function middle(a,b,c){
    if((a>b&&a<c)||(a<b&&a>c)){console.log(a);}
    else if((b>a&&b<c)||(b<a&&b>c)){console.log(b);}
    else{console.log(c);}

}
middle(10,25,15);

//4.)print in the range
function print(){
    for(let i=1;i<=navigation;i++){
        console.log(i);
    }
}
print(10);

//5.)multiplication table
function table(n){
    for(let i=1;i<=10;i++){
        console.log(n+"x"+i+"="+(n*i));
    }
}
table(8);

//6.)sum of digits
function sumdigits(n){
    let sum=0;
    while(n>0){
        let digit=n%10;
        sum=sum+digit;
        n=parseInt(n/10);
    }
    console.log(sum);
}
sumdigits(12345);

//7.)no of digits
function countdig(n){
    let count=0;
    while(n>0){
        count++;
        n=parseInt(n/10);
    }
    console.log(count);
}
countdig(123456);

//8.)first and last digits
function firstlast(n){
    let last=n%10;
    let first=n;
    while(first>=10){
        first=parseInt(first/10);
    }
    console.log("first digit=",first);
    console.log("last digit=",last);
}
firstlast(98765);


//9.)strong number
function strong(n){
    let original=n;
    let sum=0;
    while(n>0){
        let digit=n%10;
        let  fact=1;
        for(let i=1;i<=digit;i++){
            fact=fact*i;
        }
        sum=sum+fact;
        n=parseInt(n/10);
    }
    if(sum==original){console.log("Strong number");}
    else{console.log("Not Strong number");}
}
strong(145);

//10.)odd factors
function oddFactors(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0 && i % 2 != 0) {
            console.log(i);
        }
    }
}
oddFactors(36);

//11.)even numbers in the range
function evenRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            continue;
        }
        console.log(i);
    }
}
evenRange(1, 20);

//12.)first prime
function firstPrime(start, end) {
    for (let n = start; n <= end; n++) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log("First prime =", n);
            break;
        }
    }
}
firstPrime(20, 50);

//13.)count divisors numbers
function countNumbers(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 6 == 0 || i % 8 == 0) {
            count++;
        }
    }
    console.log(count);
}
countNumbers(1, 30);

//14.)Fibonacci using while
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let count = 1;
    while (count <= n) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;

        count++;
    }
}
fibonacci(10);

//15.)number pattern
function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let j = 1; j <= i; j++) {
            str = str + i;
        }
        console.log(str);
    }
}
pattern(5);

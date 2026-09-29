//1.) hello
let hello = function() {
    console.log("Hello World");
};
hello();

//2.) check even or odd
let check = function() {
    let n = 25;
    if (n % 2 == 0)
        console.log("Even");
    else
        console.log("Odd");
};
check();

//3.)print 1 to 10
let numbers = function() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
};
numbers();

//4.)multiplication
let table = function() {
    let n = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
};
table();

//5.)factoerial
let factorial = function() {
    let n = 5;
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(fact);
};
factorial();

//with input and without return
//6.)positive or negative
let checkNumber = function(n) {
    if (n > 0)
        console.log("Positive");
    else if (n < 0)
        console.log("Negative");
    else
        console.log("Zero");
};
checkNumber(-10);

//7.)find square
let square = function(n) {
    console.log(n * n);
};
square(6);

//8.)table
let tabl = function(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
};
tabl(7);

//9.)sum of digits
let sumDigits = function(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }
    console.log(sum);
};
sumDigits(12345);

//10.)print even or odd
let evenNumbers = function(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
};

evenNumbers(1, 20);

//without input and with return
//11.)return sum
let add = function() {
    return 20 + 30;
};
let result = add();
console.log(result);

//12.)return square
let squar = function() {
    return 15 * 15;
};

let resul = square();
console.log(resul);

//13.)return factorial
let factoria = function() {
    let fact = 1;
    for (let i = 1; i <= 5; i++) {
        fact = fact * i;
    }
    return fact;
};

let resu = factorial();
console.log(resu);

//14.)return sum
let sum = function() {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
        total = total + i;
    }
    return total;
};
let res= sum();
console.log(res);

//15.)return reverse
let reverse = function() {
    let n = 1234;
    let rev = 0;

    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    return rev;
};

let v = reverse();
console.log(v);

//with inputs and with return
//16.)return square
let squa = function(n) {
    return n * n;
};
let re = square(8);
console.log(re);

//17.)return largest
let largest = function(a, b) {
    if (a > b)
        return a;
    else
        return b;
};
let r = largest(25, 40);
console.log(r);

//18.)return sum
let large = function(a, b) {
    if (a > b)
        return a;
    else
        return b;
};

let t = large(25, 40);
console.log(t);

//19.)return reverse
let sumDigit = function(n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }

    return sum;
};

let l = sumDigit(12345);
console.log(l);

//palindrome
let revers = function(n) {
    let rev = 0;

    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    return rev;
};

let lt = reverse(12345);
console.log(lt);
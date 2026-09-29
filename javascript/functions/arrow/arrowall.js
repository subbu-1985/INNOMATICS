//without input and withreturn
//1.)hello
let hello = () => {
    console.log("Hello World");
};
hello();

//2.)even
let check = () => {
    let n = 20;

    if (n % 2 == 0)
        console.log("Even");
    else
        console.log("Odd");
};
check();

//range
let numbers = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
};
numbers();

//4.)odd
let oddNumbers = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
};
oddNumbers();

//factorial
let factorial = () => {
    let fact = 1;
    for (let i = 1; i <= 5; i++) {
        fact = fact * i;
    }
    console.log(fact);
};
factorial();

//6.)positive
let chec = (n) => {
    if (n > 0)
        console.log("Positive");
    else if (n < 0)
        console.log("Negative");
    else
        console.log("Zero");
};
chec(-5);

//7.)square
let square = (n) => {
    console.log(n * n);
};
square(7);

//8.)multiplication
let table = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
};
table(9);

//9.)count digits
let countDigits = (n) => {
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    console.log(count);
};
countDigits(123456);

//prime
let primes = (start, end) => {
    for (let n = start; n <= end; n++) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log(n);
        }
    }
};
primes(10, 30);

//11.)
let add = () => {
    return 25 + 35;
};
let result = add();
console.log(result);

//12.)
let cube = () => {
    return 5 * 5 * 5;
};
let resul = cube();
console.log(resul);

//13.)
let factoria = () => {
    let fact = 1;
    for (let i = 1; i <= 6; i++) {
        fact = fact * i;
    }
    return fact;
};
let resu = factoria();
console.log(resu);

//14.)
let sumDigits = () => {
    let n = 4567;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }

    return sum;
};

let res = sumDigits();
console.log(res);

//15.)
let reverse = () => {
    let n = 12345;
    let rev = 0;

    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    return rev;
};
let re = reverse();
console.log(re);

//with input and with return
//square
let squar = (n) => {
    return n * n;
};
let r = squar(10);
console.log(r);

//largest
let largest = (a, b, c) => {

    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else
        return c;
};
let t = largest(10, 50, 30);
console.log(t);

//even
let large = (a, b, c) => {

    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else
        return c;
};

let lt = large(10, 50, 30);
console.log(lt);

//palindrome
let sumEven = (start, end) => {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }

    return sum;
};

let ult = sumEven(1, 20);
console.log(ult);

//arm
let armstrong = (n) => {
    let original = n;
    let temp = n;
    let count = 0;
    let sum = 0;

    // Count digits
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }

    temp = n;

    // Calculate Armstrong sum
    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + Math.pow(digit, count);
        temp = Math.floor(temp / 10);
    }

    return sum == original;
};

let l = armstrong(153);
console.log(l);

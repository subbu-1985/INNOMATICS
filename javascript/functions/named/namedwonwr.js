//1.)return sum
function add(){
    return 25+97;
}
let result=add();
console.log(result);

//2.)square
function square() {
    return 15 * 15;
}
let resu = square();
console.log(resu);

//3,)cube
function cube() {
    return 4 * 4 * 4;
}
let a= cube();
console.log(a);

//4.)smalest
function smallest() {
    if (45 < 27)
        return 45;
    else
        return 27;
}
let b = smallest();
console.log(result);

//5.)divisibilityof 6
function divisible() {
    if (48 % 6 == 0)
        return true;
    else
        return false;
}
let c = divisible();
console.log(result);

//6.)sum 1 tom50
function sum() {
    let total = 0;
    for (let i = 1; i <= 50; i++) {
        total = total + i;
    }
    return total;
}
let d = sum();
console.log(result);

//7.)product 1 to 10
function product() {
    let p = 1;
    for (let i = 1; i <= 10; i++) {
        p = p * i;
    }
    return p;
}
let e = product();
console.log(result);

//8.)count even
function countEven() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            count++;
        }
    }
    return count;
}
let f = countEven();
console.log(f);

//9.)sum of digits
function sumDigits() {
    let n = 456789;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }

    return sum;
}

let g = sumDigits();
console.log(g);

//10.)reveerse
function reverse() {
    let n = 24680;
    let rev = 0;
    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    return rev;
}
let h = reverse();
console.log(h);

//11.)strong
function strong() {
    let n = 145;
    let original = n;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        let fact = 1;
        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
    }
    return sum == original;
}
let k = strong();
console.log(k);

//12.)Armstrong 
function armstrong() {
    let n = 371;
    let original = n;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit * digit * digit;
        n = Math.floor(n / 10);
    }
    return sum == original;
}
let l = armstrong();
console.log(l);

//13.)largest factor
function largestFactor() {
    let n = 72;
    for (let i = n - 1; i >= 1; i--) {
        if (n % i == 0) {
            return i;
        }
    }
}
let m = largestFactor();
console.log(m);

//14.)sum of numbers divisible
function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 4 == 0 && i % 6 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
let p = sumNumbers();
console.log(p);

//15.)average of prime numbers
function averagePrime() {
    let sum = 0;
    let count = 0;
    for (let n = 1; n <= 100; n++) {
        let factors = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                factors++;
            }
        }
        if (factors == 2) {
            sum = sum + n;
            count++;
        }
    }
    return sum / count;
}

let q = averagePrime();
console.log(q);
//1.)square
function square(n) {
    return n * n;
}
let result = square(5);
console.log(result);

//2.)cube
function cube(n) {
    return n * n * n;
}
let a = cube(4);
console.log(a);

//3.)largest
function largest(a, b, c) {
    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else
        return c;
}
let d = largest(10, 25, 15);
console.log(d);

//4.)no of digits
function countDigits(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}
let e = countDigits(123456);
console.log(e);

//5.)sum of digits
function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
let f= sumDigits(12345);
console.log(f);

//6.)reverse a number
function reverse(n) {
    let rev = 0;
    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    return rev;
}
let g = reverse(12345);
console.log(g);

//7.)palindrome
function palindrome(n) {
    let original = n;
    let rev = 0;
    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    return original == rev;
}
let h = palindrome(121);
console.log(h);

//8.)armstrong
function armstrong(n) {
    let original = n;
    let temp = n;
    let count = 0;
    let sum = 0;
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }
    temp = n;
    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + Math.pow(digit, count);
        temp = Math.floor(temp / 10);
    }
    return sum == original;
}
let k = armstrong(153);
console.log(k);

//9.)sum of even
function sumEven(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
let l = sumEven(1, 20);
console.log(l);

//10.)count factors
function sumEven(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }

    return sum;
}
let m = sumEven(1, 20);
console.log(m);

//11.)largest prime
function largestPrime(start, end) {
    let largest = 0;
    for (let n = start; n <= end; n++) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            largest = n;
        }
    }
    return largest;
}
let p = largestPrime(10, 50);
console.log(p);

//12.)sum of primes
function sumPrime(start, end) {
    let sum = 0;
    for (let n = start; n <= end; n++) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            sum = sum + n;
        }
    }
    return sum;
}
let q = sumPrime(1, 20);
console.log(q);

//12.)sum of perfectnumbers
function sumPerfect(start, end) {
    let sumPerfectNumbers = 0;
    for (let n = start; n <= end; n++) {
        let sum = 0;
        for (let i = 1; i < n; i++) {
            if (n % i == 0) {
                sum = sum + i;
            }
        }
        if (sum == n) {
            sumPerfectNumbers = sumPerfectNumbers + n;
        }
    }
    return sumPerfectNumbers;
}
let r = sumPerfect(1, 1000);
console.log(r);

//14.)fibonacci
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let result = "";
    for (let i = 1; i <= n; i++) {
        result = result + a + " ";
        let c = a + b;
        a = b;
        b = c;
    }
    return result;
}
let s = fibonacci(10);
console.log(s);

//15.)avg of arnstrong
function averageArmstrong(start, end) {
    let sum = 0;
    let count = 0;
    for (let n = start; n <= end; n++) {
        let original = n;
        let temp = n;
        let digits = 0;
        let armSum = 0;
        // Count digits
        while (temp > 0) {
            digits++;
            temp = Math.floor(temp / 10);
        }
        temp = n;
        // Calculate Armstrong sum
        while (temp > 0) {
            let digit = temp % 10;
            armSum = armSum + Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }
        if (armSum == original) {
            sum = sum + n;
            count++;
        }
    }
    if (count == 0)
        return 0;
    return sum / count;
}
let t = averageArmstrong(1, 1000);
console.log(t);
//break
// 1. Find the first even digit from the left in 753914286
let num=753914286;
while(num>0){
    let digit=num%10;
    num=Math.floor(num/10);
    if(digit%2==0){
        console.log("First even digit:",digit);
        break;
    }
}

// 2. Find the first prime number between 50 and 100
for(let n=50;n<=100;n++){
    let prime=true;
    for(let i=2;i<n;i++){
        if(n%i==0){
            prime=false;
            break;
        }
    }
    if(prime){
        console.log("First prime:",n);
        break;
    }
}

// 3. Find the first number whose digit sum is 10
for(let n=1;n<=500;n++){
    let temp=n;
    let sum=0;
    while(temp>0){
        sum+=temp%10;
        temp=Math.floor(temp/10);
    }
    if(sum==10){
        console.log("First number with digit sum 10:",n);
        break;
    }
}

// 4. First number with exactly 3 divisors between 1 and 100
for(let n=1;n<=100;n++){
    let count=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count==3){
        console.log("First number with 3 divisors:",n);
        break;
    }
}

// 5. Stop when 3 consecutive odd numbers occur between 1 and 50
let consecutive=0;
for(let n=1;n<=50;n++){
    if(n%2!=0){
        consecutive++;
        if(consecutive==3){
            console.log("Stopped at:",n);
            break;
        }
    }else{
        consecutive=0;
    }
}

// 6. Find the first palindrome between 10 and 500
for(let n=10;n<=500;n++){
    let temp=n;
    let reverse=0;
    while(temp>0){
        let digit=temp%10;
        reverse=reverse*10+digit;
        temp=Math.floor(temp/10);
    }
    if(n==reverse){
        console.log("First palindrome:",n);
        break;
    }
}

// 7. Find the first perfect number between 1 and 1000
for(let n=1;n<=1000;n++){
    let sum=0;
    for(let i=1;i<n;i++){
        if(n%i==0){
            sum+=i;
        }
    }
    if(sum==n){
        console.log("First perfect number:",n);
        break;
    }
}

// 8. Print the first 5 even numbers
let count=0;
for(let n=1;n<=100;n++){
    if(n%2==0){
        console.log(n);
        count++;
        if(count==5){
            break;
        }
    }
}

// 9. Print the first 5 prime numbers
count=0;
for(let n=2;n<=100;n++){
    let prime=true;
    for(let i=2;i<n;i++){
        if(n%i==0){
            prime=false;
            break;
        }
    }
    if(prime){
        console.log(n);
        count++;
        if(count==5){
            break;
        }
    }
}

// 10. Print the first 3 numbers divisible by 7
count=0;
for(let n=1;n<=100;n++){
    if(n%7==0){
        console.log(n);
        count++;
        if(count==3){
            break;
        }
    }
}

//continue
// 1. Print 1-30, skipping even numbers
for(let i=1;i<=30;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}

// 2. Print 1-40, skipping multiples of 4
for(let i=1;i<=40;i++){
    if(i%4==0){
        continue;
    }
    console.log(i);
}

// 3. Print 1-30, skipping numbers from 10-20
for(let i=1;i<=30;i++){
    if(i>=10&&i<=20){
        continue;
    }
    console.log(i);
}

// 4. Print 1-50, skipping multiples of 3
for(let i=1;i<=50;i++){
    if(i%3==0){
        continue;
    }
    console.log(i);
}

// 5. Extract 502304, skipping digit 0
let num=502304;
while(num>0){
    let digit=num%10;
    num=Math.floor(num/10);
    if(digit==0){
        continue;
    }
    console.log(digit);
}

// 6. Extract 5832461, printing only even digits
num=5832461;
while(num>0){
    let digit=num%10;
    num=Math.floor(num/10);
    if(digit%2!=0){
        continue;
    }
    console.log(digit);
}

// 7. Extract 1432578, skipping odd digits
num=1432578;
while(num>0){
    let digit=num%10;
    num=Math.floor(num/10);
    if(digit%2!=0){
        continue;
    }
    console.log(digit);
}

// 8. Print 1-200, skipping multiples of 3 or 5
for(let i=1;i<=200;i++){
    if(i%3==0||i%5==0){
        continue;
    }
    console.log(i);
}

// 9. Print 1-500, skipping numbers with odd digit sum
for(let i=1;i<=500;i++){
    let temp=i;
    let sum=0;
    while(temp>0){
        sum+=temp%10;
        temp=Math.floor(temp/10);
    }
    if(sum%2!=0){
        continue;
    }
    console.log(i);
}

// 10. Print 1-500, skipping numbers containing digit 0
for(let i=1;i<=500;i++){
    let temp=i;
    let containsZero=false;
    while(temp>0){
        let digit=temp%10;
        temp=Math.floor(temp/10);
        if(digit==0){
            containsZero=true;
            break;
        }
    }
    if(containsZero){
        continue;
    }
    console.log(i);
}

//break & continue
// 1. Print 1-50, skip multiples of 3, stop at 40
for(let i=1;i<=50;i++){
    if(i==40){
        break;
    }
    if(i%3==0){
        continue;
    }
    console.log(i);
}

// 2. Print odd numbers, skip evens, stop at first multiple of 7
for(let i=1;i<=50;i++){
    if(i%7==0){
        break;
    }
    if(i%2==0){
        continue;
    }
    console.log(i);
}

// 3. Extract 5830421, skip odd digits, stop at 0
let str="5830421";
for(let i=0;i<str.length;i++){
    let digit=Number(str[i]);
    if(digit==0){
        break;
    }
    if(digit%2!=0){
        continue;
    }
    console.log(digit);
}

// 4. Extract 8325147, print digits until 5
str="8325147";
for(let i=0;i<str.length;i++){
    let digit=Number(str[i]);
    if(digit==5){
        break;
    }
    console.log(digit);
}

// 5. Search from 51, skip non-multiples of 9, stop at first multiple of 9
for(let i=51;i<=100;i++){
    if(i%9!=0){
        continue;
    }
    console.log("First multiple of 9:",i);
    break;
}

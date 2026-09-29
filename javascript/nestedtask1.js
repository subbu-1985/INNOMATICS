//Find the sum of all prime numbers between 20 and 150.
let sum=0;
console.log("with for loop");
for(let n=20;n<=150;n++){
    prime=true;
    for(let i=2;i<n;i++){
        if(n%i==0){
            prime=false;
            break;
        }
    }
    if(prime){
        sum+=n;
    }
}
console.log("The sum of all prime numbers between 20 to 150 : ",sum);
//with while
console.log("with while");
sum=0;
i=20;
while(i<=150){
    prime=true;
    j=2
    while(j<i){
        if(i%j==0){
            prime=false
        }
        j++
    }
    if(prime){
        sum+=i
    }
    i++;
}
console.log("The sum of all prime numbers between 20 to 150 : ",sum);


// Find the average of all perfect numbers between 1 and 1000.
let sump=0;
let count=0;
for(let i=1;i<=1000;i++){
    sum=0;
    for(let j=1;j<i;j++){
        if(i%j==0){
            sum+=j
        }
    }
    if(i==sum){
        sump+=i
        count++
    }
}
console.log("The average of all perfect numbers i the range between 1 to 1000 : ",sump/count);
//with while
console.log("with while loop");
sump=0
count=0
i=1;
while(i<=1000){
    sum=0;
    j=1
    while(j<i){
        if(i%j==0){
            sum+=j
        }
        j++
    }

if(i==sum){
    sump+=i;
    count++;
}
i++
}
console.log(sump/count);
// Print all leap years between 1900 and 2026
console.log("All the leap year in the range of 1900 to 2026");
for(let i=1900;i<=2026;i++){
    if(i%4==0){
        console.log(i);
    }
}
//with while
console.log("with while loop")
i=1900
while(i<2026){
    if(i%4==0){
        console.log(i);
    }
    i++;
}
// Print all palindrome numbers between 100 and 500.
console.log("4. Palindrome numbers between 100 and 500");
for(let num=100;num<=500;num++){
    let temp=num;
    let reverse=0;
    while(temp>0){
        let digit=temp%10;
        reverse=reverse*10+digit;
        temp=Math.floor(temp/10);
    }
    if(num==reverse){
        console.log(num);
    }
}
console.log("While loop");
num=100;
while(num<=500){
    let temp=num;
    let reverse=0;
    while(temp>0){
        let digit=temp%10;
        reverse=reverse*10+digit;
        temp=Math.floor(temp/10);
    }
    if(num==reverse){
        console.log(num);
    }
    num++;
}

// 5. Numbers between 120 and 850 with digit sum 10
console.log("5. Numbers whose digit sum is 10");
for(let num=120;num<=850;num++){
    let temp=num;
    let digitSum=0;
    while(temp>0){
        digitSum+=temp%10;
        temp=Math.floor(temp/10);
    }
    if(digitSum==10){
        console.log(num);
    }
}
console.log("While loop");
num=120;
while(num<=850){
    let temp=num;
    let digitSum=0;
    while(temp>0){
        digitSum+=temp%10;
        temp=Math.floor(temp/10);
    }
    if(digitSum==10){
        console.log(num);
    }
    num++;
}

// 6. Pairs between 1 and 50 whose sum is 30
console.log("6. Pairs whose sum is 30");
for(let a=1;a<=50;a++){
    for(let b=a;b<=50;b++){
        if(a+b==30){
            console.log("("+a+","+b+")");
        }
    }
}
console.log("While loop");
let a=1;
while(a<=50){
    let b=a;
    while(b<=50){
        if(a+b==30){
            console.log("("+a+","+b+")");
        }
        b++;
    }
    a++;
}

// 7. Numbers between 10 and 300 with exactly 3 factors
console.log("7. Numbers with exactly 3 factors");
for(let num=10;num<=300;num++){
    let factorCount=0;
    for(let j=1;j<=num;j++){
        if(num%j==0){
            factorCount++;
        }
    }
    if(factorCount==3){
        console.log(num);
    }
}
console.log("While loop");
num=10;
while(num<=300){
    let factorCount=0;
    let j=1;
    while(j<=num){
        if(num%j==0){
            factorCount++;
        }
        j++;
    }
    if(factorCount==3){
        console.log(num);
    }
    num++;
}

// 8. Prime Factors of every number between 20 and 50
console.log("8. Prime factors of numbers between 20 and 50");
for(let num=20;num<=50;num++){
    let temp=num;
    let factors="";
    for(let j=2;j<=temp;j++){
        let prime=true;
        for(let k=2;k<j;k++){
            if(j%k==0){
                prime=false;
                break;
            }
        }
        if(prime){
            while(temp%j==0){
                factors+=j+" ";
                temp=temp/j;
            }
        }
    }
    console.log(num+": "+factors);
}
console.log("While loop");
num=20;
while(num<=50){
    let temp=num;
    let factors="";
    let j=2;
    while(j<=temp){
        let prime=true;
        let k=2;
        while(k<j){
            if(j%k==0){
                prime=false;
                break;
            }
            k++;
        }
        if(prime){
            while(temp%j==0){
                factors+=j+" ";
                temp=temp/j;
            }
        }
        j++;
    }
    console.log(num+": "+factors);
    num++;
}

// 9. Armstrong Numbers between 100 and 999
console.log("9. Armstrong numbers between 100 and 999");
for(let num=100;num<=999;num++){
    let temp=num;
    let sum=0;
    while(temp>0){
        let digit=temp%10;
        sum+=digit*digit*digit;
        temp=Math.floor(temp/10);
    }
    if(sum==num){
        console.log(num);
    }
}
console.log("While loop");
num=100;
while(num<=999){
    let temp=num;
    let sum=0;
    while(temp>0){
        let digit=temp%10;
        sum+=digit*digit*digit;
        temp=Math.floor(temp/10);
    }
    if(sum==num){
        console.log(num);
    }
    num++;
}

// 10. Number between 50 and 150 with maximum factors
console.log("10. Number with maximum factors");
let maxFactors=0;
let maxNumber=0;
for(let num=50;num<=150;num++){
    let factorCount=0;
    for(let j=1;j<=num;j++){
        if(num%j==0){
            factorCount++;
        }
    }
    if(factorCount>maxFactors){
        maxFactors=factorCount;
        maxNumber=num;
    }
}
console.log("Number:",maxNumber);
console.log("Maximum factors:",maxFactors);
maxFactors=0;
maxNumber=0;
num=50;
while(num<=150){
    let factorCount=0;
    let j=1;
    while(j<=num){
        if(num%j==0){
            factorCount++;
        }
        j++;
    }
    if(factorCount>maxFactors){
        maxFactors=factorCount;
        maxNumber=num;
    }
    num++;
}
console.log("While loop - Number:",maxNumber);
console.log("While loop - Maximum factors:",maxFactors);
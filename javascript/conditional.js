//if-else
//1. Check whether a number is a 3-digit number or not
let n=457;
if(n>=100 && n<=999){
    console.log("It is a 3-digit number");
}else{
    console.log("It is not a 3-digit number");
}

//2. Check whether a number is divisible by both 3 and 5
let m=30;
if(m%3==0 && m%5==0){
    console.log("Number is divible by both 4 and 5");
}
else{
    console.log("Number is not divisible by both 3 and 5");
}

//3. Check whether a triangle is valid or not
let a=5;
let b=6;
let c=7;
if(a+b>c && b+c>a && a+c>b){
    console.log("Valid triangle");
}
else{
    console.log("Invalid triangle");
}

//4. Check whether a number is a multiple of 10
let  d=50;
if(d%10==0){
    console.log("It is multiple of 10");
}else{
    console.log("It is not a multiple of 10");
}


//2. IF–ELSE IF–ELSE
//1. Type of triangle
let e=5;
let f=5;
let g=5;
if(a==b && b==c){
    console.log("Equilateral triangle");
}else if(a==b || b==c || a==c){
    console.log("Isosceles triangle");
}else{
    console.log("Scalene triangle");
}

//2.)electricity bill
let units=250;
let bill;
if(units<=100){
    bill=units*2;
}else if(units<=200){
    bill=units*3;
}else if(units<=300){
    bills=units*5;
}else{
    bill=units*7;
}
console.log("Electricity Bill = /-"+bill);

//3.) Dispaly age category
let age=25;
if(age<13){
    console.log("Child");
}else if(age<=19){
    console.log("Teenager");
}else if(age<=59){
    console.log("Adult");
}else{
    console.log("senior citizen");
}

//4.)Calculate discount based on shopping amount
let amount=6000;
let discount;
if(amount<1000){
    discount=0;
}else if(amount<5000){
    discount=10;
}else if(amount<10000){
    discount=20;
}else{
    discount=30;
}
finalAmount = amount - (amount * discount / 100);
console.log("Discount = " + discount + "%");
console.log("Final Amount = ₹" + finalAmount);

//5.)Display season based on month number
let month=7;
if(month>=3 && month<=6){
    console.log("Summer");
}else if(month>=7 &&month<=10){
    console.log("rainy");
}else{
    console.log("winter");
}

//6. Check whether a year is a Leap Year
let year=2024;
if(year%400==0){
    console.log("leap year");
}
else if(year%4==0 &&year%100!=0){
    console.log("leap year");
}else{
    console.log("not a leap year");
}


//3.) nested if
//1.)eligibility to donate blood
let ae=25;
let weight=55;
if(ae>=18 && ae<=60){
    if(weight>50){
        console.log("Eligible to  donate blood");
    }else{
        console.log("Not eligible - weight shoild be above 50kg");
    }
}else{
    console.log("Not eligible - age should be between 18 and 60");
}

//2. Display grade only if student passed all 4 subjects
let m1=75;
let m2=80;
let m3=65;
let m4=70;
if(m1>=35 && m2>=35 && m3>=35 && m4>=35){
    let average=(m1+m2+m3+m4)/4;
    if(average>=90){
        console.log("Grade A");
    }else if(average>=75){
        console.log("Grade B");
    }else if(average>=60){
        console.log("Grade C");
    }else{
        console.log("Grade D");
    }
}else{
    console.log("Failed in one or more subjects");
}

//scholarship eligibility
let ag=20;
let score=90;
if(age>18){
    if(score>86){
        console.log("Eligible for schloarship");
    }else{
        console.log("not eligible");
    }
}else{
    console.log("not eligible age should be above 18");
}


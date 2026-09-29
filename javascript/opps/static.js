//without outinput and without return
//sum of digits
class advanced{
    static sumdig(){
        let num=98765;
        let sum=0;
        while(num>0){
            let digit=num%10;
            sum=sum+digit;
            num=parseInt(num/10);
        }
        console.log("Sum of digits:",sum);
    }
}
advanced.sumdig();

//withinput and without return
//perfect number
class perfect{
    static pn(num){
        let sum=0;
        for(let i=1;i<num;i++){
            if(num%i==0){
                sum=sum+i;
            }
        }
        if(sum==num){
            console.log("perfect number");
        }else{
            console.log("not perfecr number");
        }
    }
}
perfect.pn(28);

//without input and with return
//fabinoci series
class fibo{
    static fibonacci(){
        let a=0;
        let b=1;
        let result="";
        for(let i=1;i<=10;i++){
            result=result+a+"";
            let c=a+b;
            a=b;
            b=c;
        }
        return result;
    }
}
let result=fibo.fibonacci();
console.log(result);

//with input nd with return
class pro{
    static lcm(a,b){
        let ora=a;
        let orb=b;
        while(b!=0){
            let remainder=a%b;
            a=b;
            b=remainder;
        }
        let gcd=a;
        let lcm =(ora*orb)/gcd;
        return lcm;

    }
}
let resul=pro.lcm(28,18);
console.log("lcm:",result);
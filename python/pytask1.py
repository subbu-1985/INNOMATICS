"""#print numbers from 1 to n
n=int(input())
for i in range(1,n,1):
    print(i)
    
#ptint numbers from n to 1
for i in range(n,0,-1):
    print(i)
    
#print odd numbers
for i in range(1,50):
    if(i%2==0):
        print(i)
        
#print odd numbers
for i in range(1,50):
    if(i%2!=0):
        print(i)
        
#multiplication table
n=int(input("Enter a number: "))
for i in range(1,11):
    print(n,"*",i, "=",n*i)
    
#squares
n=int(input("Enter a number: "))
for i in range(1,n):
    print(i**2)
    
#cubes
n=int(input("Enter a number: "))
for i in range(1,n):
    print(i**3)
    
#sum 1..n

sum=0
for i in range( 1,11):
    sum+=1
print(sum)

#sum of even numbers
total=0
for i in range(1,10):
    if(i%2==0):
        total+=1
print(total)"""

#sum of odd numbers
n=int(input("Enter a number: "))
total=0
for i in range(1,n+1):
    if i%2!=0:
        total+=i
print(total)

#Sum of squares
total=0
for i in range(1,10):
    i=i**2
    total+=i
print(total)
#end

#12. Sum of cubes
total=0
for i in range(1,10):
    i= i**3
total +=i
print(total)
#end

#13. Count even numbers
count=0
for i in range(1,10):
    if(i%2==0):
     count=count+1
print(count)


    
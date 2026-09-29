class Student {
    static college = "VVIT";
    static course = "Btech";

    constructor(name, branch, marks, year, city) {
        this.name = name;
        this.branch = branch;
        this.marks = marks;
        this.year = year;
        this.city = city;
    }

    show() {
        console.log(this.name, this.branch, this.marks, this.year, this.city);
        console.log(Student.college, Student.course);
    }
}

let s1 = new Student("Subbu", "CSM", "8.0", 2026, "Guntur");
let s2 = new Student("Purna", "CAI", "7.7", 2025, "Chpeta");
let s3 = new Student("Sumanth", "IT", "7.9", 2026, "Guntur");

s1.show();
s2.show();
s3.show();

//example 2 
class Election {
    static elecname = "Election";
    static year = 2026;
    set(name, age, location, constituency, partyname, symbol) {
        this.name = name;
        this.age = age;
        this.loc = location;
        this.constituency = constituency;
        this.party = partyname;
        this.sym = symbol;
    }
    details() {
        console.log("It's Time to ", Election.elecname);
        console.log("Election Year :", Election.year);
        console.log("Voter Name :", this.name);
        console.log("Voter Age :", this.age);
        console.log("My Location :", this.loc);
        console.log("My Constituency :", this.constituency);
        console.log("My Party :", this.party);
        console.log("Preferred Symbol to vote :", this.sym);
    }
}

let e1 = new Election();
console.log("-----Elector 1-----");
e1.set("Subbu", 22, "Andhra Pradesh", "Guntur", "Janasena", "Glass");
e1.details();

let e2 = new Election();
console.log("-----Elector 2-----");
e2.set("Purna", 23, "Andhra Pradesh", "Vijayawada", "YSRCP", "Fan");
e2.details();

let e3 = new Election();
console.log("-----Elector 3-----");
e3.set("Sumanth", 24, "Andhra Pradesh", "Guntur", "TDP", "Cycle");
e3.details();


//example 3
class Employee {

    static company = "Wipro";
    static location = "Hyderabad";

    // Instance Variables
    set_Data(emp_Name, emp_Id, emp_Age, emp_Salary) {
        this.employeeName = emp_Name;
        this.employeeId = emp_Id;
        this.employeeAge = emp_Age;
        this.employeeSalary = emp_Salary;
    }

    displayDetails() {

        // Static Variables
        console.log("Company :", Employee.company);
        console.log("Location :", Employee.location);
  
        console.log("Employee Name :", this.employeeName);
        console.log("Employee ID :", this.employeeId);
        console.log("Employee Age :", this.employeeAge);
        console.log("Employee Salary :", this.employeeSalary);
    }
}


// Employee 1
let emp1 = new Employee();
console.log("----------Employee 1-----------");
emp1.set_Data("Rahul", 101, 22, 30000);
emp1.displayDetails();

// Employee 2
let emp2 = new Employee();
console.log("----------Employee 2-----------");
emp2.set_Data("Priya", 102, 23, 35000);
emp2.displayDetails();

// Employee 3
let emp3 = new Employee();
console.log("----------Employee 3-----------");
emp3.set_Data("Kiran", 103, 24, 40000);
emp3.displayDetails();
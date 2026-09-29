//Nmaed Functions in objects without input and withput return.
// let totalstudents = "students";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: function CollegeDescription() {
//         console.log("VVIT is a engineering college");
//     }
// };
// console.log(college[totalstudents]);
// college.collegeinfo();
// college["collegeinfo"]();

//Named Function — With Input & Without Return
// let totalstudents = "students";

// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",

//     collegeinfo: function CollegeDescription(info) {
//         console.log(info);
//     }
// };

// console.log(college[totalstudents]);

// college.collegeinfo("VVIT provides engineering education.");
// college["collegeinfo"]("VVIT has different branches.");

//Named Function — Without Input & With Return
// let totalstudents = "students";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: function CollegeDescription() {
//         return "VVIT is located in Guntur";
//     }
// };
// console.log(college[totalstudents]);
// console.log(college.collegeinfo());
// console.log(college["collegeinfo"]());

//Named Function — With Input & With Return
// let totalstudents = "students";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: function CollegeDescription(info) {
//         return info;
//     }
// };
// console.log(college[totalstudents]);
// console.log(college.collegeinfo("VVIT is an engineering college."));
// console.log(college["collegeinfo"]("VVIT is located in Guntur."));


// Anonymous Functions
// Anonymous Function — Without Input & Without Return
// let establishedyear = "year";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: function () {
//         console.log("VVIT is an engineering college");
//     }
// };
// console.log(college[establishedyear]);
// college.collegeinfo();
// college["collegeinfo"]();

//Anonymous Function — With Input & Without Return
// let collegename = "name";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: function (info) {
//         console.log(info);
//     }
// };
// console.log(college[collegename]);
// college.collegeinfo("VVIT has good infrastructure.");
// college["collegeinfo"]("VVIT provides technical education.");

//Anonymous Function — Without Input & With Return
// let totalstudents = "students";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: function () {
//         return "VVIT is located in Guntur";
//     }
// }
// console.log(college[totalstudents]);
// console.log(college.collegeinfo());
// console.log(college["collegeinfo"]());

//Anonymous Function — With Input & With Return
// let totalstudents = "students";

// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: function (info) {
//         return info;
//     }
// };
// console.log(college[totalstudents]);
// console.log(college.collegeinfo("VVIT is an engineering college."));
// console.log(college["collegeinfo"]("VVIT is located in Guntur."));

//Arrow Function — Without Input & Without Return
// let totalstudents = "students";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: () => {
//         console.log("VVIT is an engineering college");
//     }
// };
// console.log(college[totalstudents]);
// college.collegeinfo();
// college["collegeinfo"]();

//Arrow Function — With Input & Without Return
// let totalstudents = "students";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: (info) => {
//         console.log(info);
//     }
// };
// console.log(college[totalstudents]);
// college.collegeinfo("VVIT has different engineering branches.");
// college["collegeinfo"]("VVIT is located in Guntur.");

//Arrow Function — Without Input & With Return
// let totalstudents = "students";
// let college = {
//     name: "VVIT",
//     location: "Guntur",
//     year: "2007",
//     students: "5000",
//     branches: "8",
//     collegeinfo: () => {
//         return "VVIT is located in Guntur";
//     }
// };
// console.log(college[totalstudents]);
// console.log(college.collegeinfo());
// console.log(college["collegeinfo"]());

//Arrow Function — Without Input & With Return
let totalstudents = "students";

let college = {
    name: "VVIT",
    location: "Guntur",
    year: "2007",
    students: "5000",
    branches: "8",
    collegeinfo: () => {
        return "VVIT is located in Guntur";
    }
};
console.log(college[totalstudents]);
console.log(college.collegeinfo());
console.log(college["collegeinfo"]());
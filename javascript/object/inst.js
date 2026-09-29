let institute={
    "inst_name":"innomatics research labs",
    branch:{
    branch1:{
        name:"Full stack experts",
        address:{
            area:"JNTU",
            city:"Hyderabad",
            state:"telangana"
        },
        courses:"FSD,Data Science"
    },
    branch2:{
        name:"innomatics",
        address:{
            area:"Dilshuknagar",
            city:"Hyderabad",
            state:"Telangana",
        },
        course:"Data science,Data Analyst",
    } 
    },
    courses:{
        "python FSD":{
            duration:"8 months",
            techstack:"python,sql,html,css,js,etc..",
            fee:40000,
            mode:"offline/online",
        },
        "java FSD":{
            duration:"8 months",
            techstack:"java,springboot,html,react,etc..",
            fee:45000,
            mode:"online/offline",
        },
        "Data Science":{
            duration:"10 months",
            techstack:"python,ml,dl,nlp",
            fee:98000,
            mode:"offline",
        } 
    },
    students:{
        totalstudents:2100,
        perbatch:50,
    },
    placedstudents:{
        std1:{
            name:"Purna",
            company:"Aptroid",
            package:"5lpa",
        },
        std2:{
            name:"Hema",
            company:"AI Logic",
            package:"4LPA",
        },
        std3:{
            name:"Sumanth",
            company:"Zensat",
            package:"5LPA",
        },
    },
    contact:{
        phone:8348787928,
        email:"innomatics@gmail.com",
        linkedin:"innomatics research labs",
        youtube:"InnomaticsResearchLabs",
    },
    rating:4.5,

}
console.log(institute)

// retriveing the data

console.log(institute["branch"])
console.log(institute["branch"]["branch1"])
console.log(institute["branch"]["branch2"])
console.log(institute["courses"])
console.log(institute["courses"]["data science"])
console.log(institute["courses"]["python FSD"]["techstack"])
console.log(institute["palcedStudents"])
console.log(institute["palcedStudents"]["std2"])


// update the data

institute["branch"]["branch2"]["name"]="Innomatics Research Labs"
institute["students"]["totalStudents"]=3000

console.log(institute["branch"]["branch2"])
console.log(institute["students"])


// add new property

institute["palcedstudents"]["std1"]["domain"]="Python developer"
institute["palcedstudents"]["std2"]["domain"]="Java developer"
institute["students"]["No.of students Placed"]="1000+"

console.log(institute["palcedStudents"])
console.log(institute["students"])


// delete property

delete institute["courses"]["data science"]
console.log(institute["courses"])

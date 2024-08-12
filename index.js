#! usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
;
const persons = new Person();
const programStart = async (persons) => {
    console.log("Welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to talk?",
        choices: ["staff", "student", "Exit"]
    });
    if (ans.select == "staff") {
        console.log("You have approached the staff room. You are allowed to ask for any info.");
    }
    else if (ans.select == "student") {
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: " Whom would you like to interact with?",
        });
        const student = persons.students.find(val => val.name == ans.student);
        if (!student) {
            const name = new Student(ans.student);
            persons.addStudent(name);
            console.log(`Hello! I am ${name.name}.Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students);
        }
        else {
            console.log(`Hello! I am ${Student.name}. Nice to catch up again`);
            console.log("Existing student list:");
            console.log(persons.students);
        }
    }
    else if (ans.select == "Exit") {
        console.log("Existing the program...");
    }
};
programStart(persons);

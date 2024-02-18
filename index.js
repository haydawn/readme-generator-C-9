const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const fileName = "README.md";

// array of questions for user
const questions = [
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
       console.log("Success")
    });
}


// function to initialize program
function init(){
    inquirer
    .prompt ([
        {
        type: "input",
        name: "Title",
        message: "What is the title of your Project?"
    },
    {
        type: "input",
        message: "Please provide a description of your Project",
        name: "Description"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Please create a Table of Contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "Please add instructions for installation"
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide guidance on how your project should be used"
    },
    {
        type: "list",
        name: "License",
        message: "Which license is your application covered under?",
        choices: ["Apache 2.0", "GNU General Public v3.0", "MIT", 
        "BSD 2-Clause Simplified", "BSD 2-Clause New/Revised", "Boost Software 1.0",]
    },
    {
        type: "input",
        name: "Contributing",
        message: "Provide a guide for contributing to your Project"
    },
    {
        type: "input",
        name: "Tests",
        message: "Provide a guide on running tests on this application"
    },
    {
        type: "input",
        name: "Questions",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "Questions",
        message: "What is your email address?"
    }

])
.then((answers) => {
    console.log(answers);
    writeToFile(fileName, (answers));
});
}


// function call to initialize program
init();

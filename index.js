const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
];


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
        name: "Description",
        message: "Please provide a description of your Project"
        
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
        name: "GitHubUsername",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    }

])

// function to write README file
.then((answers) => {
    console.log(answers);
    const README =  
    `<div>${answers.Title}\n</div> 
    <div>Description - ${answers.Description}\n</div> 
    <div>Table of Contents - ${answers["Table of Contents"]}\n</div> 
    <div>Installation - ${answers.Installation}\n</div>  
    <div>Usage - ${answers.Usage}\n</div> 
    <div>License - ${answers.License}\n </div> 
    <div>Contributing - ${answers.Contributing}\n</div> 
    <div> Tests - ${answers.Tests}\n</div>  
    <div>GitHub Username - ${answers.GitHubUsername}\n</div>  
    <div>Email - ${answers.Email}\n</div> `
    fs.writeFile('README.md' , README, () => {
        console.log("success");
    })
});
}


// function call to initialize program
init();

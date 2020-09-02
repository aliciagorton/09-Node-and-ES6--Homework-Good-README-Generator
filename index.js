const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions  = [
    {
        type: "input",
        message: "Enter the title (header) of your README",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Enter intallation instructions",
        name: "installation",
        default: "npm install"
    },
    {
        type: "input",
        message: "Enter instructions how to use",
        name: "usage"
    },
    {   
        type: "list",
        message: "Select licence or badge link",
        name: "license",
        choices:["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"], 
    },
    {  
        type: "input",
        message: "Enter the run test instructions",
        name: "test",
        default: "npm test"
        
    },
    {
        type: "input",
        message: "Enter contributer's and/or contribution guidelines",
        name: "contributing",
        
    },

    // Github
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email",
        name: "email",
    }
];

// function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(filename, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// function call to initialize program
init();


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
        message: "Enter table of contents (separated by commas)",
        name: "table",
    },
    {
        type: "input",
        message: "Enter intallation instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter instructions how to use",
        name: "usage"
    },

    {   
        type: "checkbox",
        message: "Select licence or badge link",
        name: "licence",
        choices:[
            new inquirer.Separator('=licence='),
            {name: "MIT License", 
            },
            {name: "Apache License", 
            },
            {name: "GPL License", 
            },
            {name: "Public Domain (Unlicensed)", 
            },
        ], 
    },
    {  
        type: "input",
        message: "Enter the run test instructions",
        name: "test",
        
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
    },
];

// function to write README file
function writeToFile(filename, readmeAnswers) {
    return fs.writeFileSync(filename, readmeAnswers);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers))
    })
}

let readmeAnswers =`
   
    # Title: ${questions.title}

    ## Description: ${questions.description}

    ## Table of Contents: ${questions.table}
   
    ### Installation
    ${questions.installation}
 
    ### Usage
    ${questions.usage}

    ### License:
    ${questions.license}

    ![GitHub License](https://img.shields.io/badge/license-${questions.license}-blue.svg)

    ### Test
    ${questions.testing}

    ### Contributors
    ${questions.contributors}

    
    ## Contact:
    ### Developer: ${questions.developer}

    ### Profile: https://github.com/${questions.github}
    
    `
console.log(readme);


// function call to initialize program
init();


// AS A developer
// I WANT a README generator
// SO THAT can quickly create a professional README for a new project
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter the title of your project",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the project's table of contents",
        name: "table"
    },
     //look into default for inquirer
    {
        type: "input",
        message: "Enter the project's intallation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the project's usage information",
        name: "usage"
    },

    {
        type: "input",
        message: "Enter the projects contribution guidelines",
        name: "contributing",
        
    },
    {   //look into default for inquirer
        type: "input",
        message: "Enter the run test instructions",
        name: "test"
        
    },
    {   //change the type to a list and have user pick
        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        type: "list",
        message: "Enter the project licence or badge link",
        name: "licence"
       
    },
    // Github
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email",
        name: "email"
    },
    // Additional Questions
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
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

// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');

// Import helper method
var generateMarkdown = require('./utils/generateMarkdown.js');
    
// TODO: Create an array of questions (objects) for user input
const questions = [
{
    type: "input", 
    name: "title",
    message: "What is your project title?"
},
{ 
    type: "input",
    name: "description",
    message: "What is your project's description?"

},
{ 
    type: "input",
    name: "installation",
    message: "What are your project's installation notes?"

},
{ 
    type: "input",
    name: "usage",
    message: "What are your usage notes?"

},
{ 
    type: "input",
    name: "contribution",
    message: "What are your contibution notes?"

},
{ 
    type: "input",
    name: "test",
    message: "What are your testing instructions?"
},
{
    name: "license",
    message: "Which licence did you use?",
    type: "list",
    choices: ["Public domain", "Permissive", "LGPL", "Copyleft"]
}, 
{
    type: "input", 
    name: "gitHub", 
    message: "What is your GitHub username?"
}, 
{
    type: "input", 
    name: "email", 
    message: "What is your email?"
}
];

// TODO: Create a function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile('../README.md', data, err => {
        if (err) {
          console.error(err);
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    console.log(` `);
    console.log(` `);
    console.log(`Hi and welcome to the Readme generator.`);
    console.log(` `);
    console.log(` `);

    // Display question
    inquirer
        .prompt(questions)
        .then((responses) => {
            // Once we get all the answers / responses 
            // run the following code
            const markdown = generateMarkdown(responses);
            writeToFile("../README.md",markdown);
        })
        .catch((error) => {
            console.log("Something went wrong " + error);
        });
    }
    // Then generate readme markup text for the readme 
    // Add it to the readme 

// Function call to initialize app
init();

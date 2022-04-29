// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input", 
    name: "title",
    message: "What is your project title?"

},

{
    type: "input",
    name: "sections",
    message: "Which sections do your project include?"


},

{ 
    type: "input",
    name: "description",
    message: "What is your project's description?"

},

{
    type: "option",
    name: "license",
    message: "Which licence did you use?"

}, 

{
    type: "input", 
    name: "GitHub", 
    message: "What is your GitHub username?"


}, 

{
    type: "input", 
    name: "email", 
    message: "What is your email?"


}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(`Your answers were ${answers}`);
        })
        .catch((error) => {
            console.log("Something went wrong " + error);
        });
    }
    // Then generate readme markup text for the readme 
    // Add it to the readme 

// Function call to initialize app
init();

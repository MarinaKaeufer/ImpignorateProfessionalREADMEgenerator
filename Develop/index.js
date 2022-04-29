// TODO: Include packages needed for this application

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

    // Loop through the questions array and prompt user for answer
    for(let i = 0; i < questions.length; i++){
        console.log(questions[i].message);
    }
    // Then generate readme markup text for the readme 
    // Add it to the readme 

}

// Function call to initialize app
init();

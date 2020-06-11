const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUserInfo(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What's your Github user?"
        },
        {
            type: "input",
            name: "badge",
            message: "Enter al least one badge"
        },
        {
            type: "input",
            name: "title",
            message: "What's your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project"
        },
        {
            type: "input",
            name: "table",
            message: "Enter a table of contents"
        },
        {
            type: "input",
            name: "installation",
            message: "Give your users an installation guide"
        },
        {
            type: "input",
            name: "badge",
            message: "Enter al least one badge"
        },
    ]);
}




function writeToFile(data) {
    return `# Project Title
    ## Description
    Hola, esta es la descripción
    ## Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[Licence](#license)
    ## Installation
    Steps required to install your project
    ## Usage
    Instructions to use. Screenshots
    ## Credits
    List of collaborators
    ## License 
    Let the others know if they can usea your project`  
}

async function init() {
    try {
        const userAnswers = await promptUserInfo();
        const readme = writeToFile(userAnswers);
        await writeFileAsync("README.md", readme);
        console.log("SUCCESS!");
    } catch(err) {
        console.log(err);
    }
}

init();

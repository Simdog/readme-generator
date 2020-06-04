const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your github username?"
    },
    {
        type: "input",
        name:"email",
        message: "Email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "please describe the project:"
    },
    {
        type: "list",
        message: "License Type:",
        name: "license",
        choices: [
            "MIT",
            "GNU",
            "ISC",
            "Apache"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Instructions:"
    },
    {
        type: "input",
        name: "contributors",
        message: "Co-Authors:"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests:"
    },
    {
        type: "input",
        name: "fileName",
        message: "What File Name do you want your .md file to be (readme if want default)?"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data, function (err) {
        if (err) {
            return console.log("it failed to write to the file Error: \n", err)
        }

    })
}

async function init() {
    const userInput = await inquirer.prompt(questions);
    let { data } = "";
    let profilePic;
    console.log(`https://api.github.com/users/${userInput.userName}`);
    try {
        data = await axios.get(`https://api.github.com/users/${userInput.userName}`);
        profilePic = data.avatar_url;
    } catch (error) {
        console.log("failed to get the user name from github: \n" , error)
    }
    const content = makeContent(userInput);

    writeToFile(userInput.fileName , content);

}

function makeContent(object) {
    let content = `
    # Profile Pic
    ${this.profilePic}
    # Email
    ${object.email}
    # ${object.title}
    ## Description
    ${object.description}
    ## Table of contents 
    - Installation (#installation)
    - Usage (#usage)
    - License (#license)
    - Contributing (#contributing)
    - Tests (#tests)
    - Questions (questions)
    ## Installation
    ${object.installation}
    ##Usage
    ${object.usage}
    ## License
    ${object.license}
    [![License: ${object.license}](https://img.shields.io/badge/License-${object.license}-red.svg)](https://opensource.org/licenses/${object.license})
    __________________________
 
    `;
    return content;
}

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// ![alt text](https://img.shields.io/github/license/${object.userName}/${object.title}.svg "License")

init();

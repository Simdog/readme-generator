const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

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
        name: "contributions",
        message: "Co-Authors:"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests:"
    }
];

function writeToFile(data) {
    fs.writeFile("readme.md", data, function (err) {
        if (err) {
            return console.log("it failed to write to the file Error: \n", err)
        }

    })
}

async function init() {
    const userInput = await inquirer.prompt(question);
    const { data } = "";
    let profilepic;
    try {
        data = await axios.get(`https://api.github.com/users/${userInput.userName}`);
        profilepic = data.
    }

}

init();

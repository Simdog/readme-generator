const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const questions = [

];

function writeToFile(fileName, data) {
    fs.writeFile(filename, data, function (err) {
        if (err) {
            return console.log("it failed to write to the file Error: \n", err)
        }

    })
}

function init() {
    const userInput = await inquirer.prompt(question);
    const { data } = "";

}

init();

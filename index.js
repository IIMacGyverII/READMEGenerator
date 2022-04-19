// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
    type: 'input',
    name: 'projectName',
    message: 'What is your projects name?',
    },
    {
        type: 'input',
        message: 'Enter a description for this project:',
        name: 'description',
        // choices: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    },
    {
    type: 'input',
    message: 'What was your motivation for this project?',
    name: 'motivation',
    
    },
    {
    type: 'input',
    message: 'Why did you build this project?',
    name: 'whyDidYou',
    
    },
    {
        type: 'input',
        name: 'problemSolved',
        message: 'What problem does this solve?',
        
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'whatDidYouLearn',
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this?',
        
    },
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage',
        
    },
    {
        type: 'input',
        message: 'Add a link to a screenshot or gif',
        name: 'screenShot',
        
    },
])
// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
// TODO: Create a function to write README file
.then((response) =>
    {
        let content = `
# Project Title: ${response.projectName}
## Description:
    ${response.description}
## What motivated me:
    ${response.motivation}
## Why did I build this project?
    ${response.whyDidYou}
## What problem does this solve?
    ${response.problemSolved}
## What did you learn?
    ${response.whatDidYouLearn}
## Installation
    ${response.installation}
## Usage
    ${response.usage}
## Screenshot
<!-- ![portfolio demo](${response.screenShot}) -->`;
        fs.writeFile('README.md', content, (error) => console.error(error))
    })

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

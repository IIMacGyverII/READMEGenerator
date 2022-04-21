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
        message: 'Add a link to a screenshot or gif.  This can be either a url or a relative path to an image file',
        name: 'screenShot',   
    },
    {
        type: 'input',
        message: 'To whom would you like to give credit?',
        name: 'credit',   
    },
    {
        type: 'checkbox',
        message: 'Which license(s) did you use?',
        name: 'license',   
        choices: ['Apache', 'MIT', 'APGL', 'WTFPL'],
    },
])



// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
// TODO: Create a function to write README file
.then((response) =>
    {
        let badgeApache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        // console.log(typeof response.description)
        
        let badgeMIT = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        // console.log(typeof response.description)
        
        let badgeAPGL = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        // console.log(typeof response.description)
        
        let badgeWTFPL = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
        // console.log(typeof response.description)

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
![screenshot](${response.screenShot}?raw=true)
## Credit
    ${response.credit}
## Licenses Used
${badgeApache}  ${badgeMIT}    ${badgeAPGL}    ${badgeWTFPL}`;
    if (response.license === "Apache") {
        let badgeApache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    if (response.license === "MIT") {
        let badgeMIT = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (response.license === "APGL") {
        let badgeAPGL = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    if (response.license === "WTFPL") {
        let badgeWTFPL = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    };
        fs.writeFile('README.md', content, (error) => console.error(error))
        console.log("Congratulations!  Your README>.MD is complete!")
    })

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
//  npl mit agpl apache
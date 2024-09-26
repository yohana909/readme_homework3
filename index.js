// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the project used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are included?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license of the project?',
    },
];

function generateREADME(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.
    `;
}

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
}

inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        console.error('Error in prompting user input:', error);
    });

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

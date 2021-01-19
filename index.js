const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("utils");
const generateMarkdown = require("./utils/generateMarkdowns");
const { restoreDefaultPrompts } = require("inquirer");
// TODO: Include packages needed for this application
inquirer.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    message: "Enter project title",
    name: "title",
  },
  {
    type: "input",
    message: "Enter project description",
    name: "description",
  },
  {
    type: "input",
    message: "Enter your installation process",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage of the project",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter technologies used",
    name: "tech",
  },
  {
    type: "input",
    message: "Enter licenses used for the project",
    name: "license",
  },
  {
    type: "input",
    message: "Enter contributing information",
    name: "contributor",
  },
  {
    type: "input",
    message: "Enter any tests you are running for this project",
    name: "test",
  },
  {
    type: "input",
    message: "Enter GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "Enter email address",
    name: "email",
  },
]);

return `# ${response.title}
      
      ##Description:

      ${response.description}
      https://github.com/${response.username}/${response.title}
    
      #Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [Technologies]9(#technologies)
      * [License](#license)
      * [Contributors](#contributor)
      * [Test](#test)
      * [Questions](#questions)
      
      ##Installation:

      ${response.installation}
    
      ##Usage:

      ${response.usage}
    
      ##Technologies: 

        This project was created with:
        ${response.technologies} 

      ##License:

      This project is licensed under:
      ${response.license}
    
      ##Contributors:
      ${response.contributor}

    
      ##Test:
    
      ##Questions:
        If you have any questions about the repo, please feel free to reach me at ${response.email}.
    `;
//         fs.writeFile('index.html', data, function(error){
//       //True             //False (else)
//       error ? console.error(error) : console.log('success')
// })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeToFile(`./${fileName.toLowerCase().split(' ').join('')}.md)`)
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

//   .then((data) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     error
//       ? console.error(error)
//       : console.log("Your ReadMe has been generated!");
//   });

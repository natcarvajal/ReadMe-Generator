const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    message: "Enter your project title",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a short project description",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation process",
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
    type: "checkbox",
    message: "Enter the license used for this project",
    name: "license",
    choices: ["Apache", "Boost", "BSD", "Eclipse", "GNU", "MIT"],
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

function generateMarkdown(response) {
  if (response.license == "Apache") {
    response.license =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (response.license == "Boost") {
    response.license =
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (response.license == "BSD") {
    response.license =
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (response.license == "Eclipse") {
    response.license =
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (response.license == "GNU") {
    response.license =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (response.license == "MIT") {
    response.license =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    response.license = "None";
  }

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
      
      ##Installation

      The following dependencies are necessary for this project to run,
      ${response.installation}
    
      ##Usage

      ${response.usage}
    
      ##Technologies 

      This project was created with:
      ${response.technologies} 

      ##License

      This project is licensed under:
      ${response.license}
    
      ##Contributors

      ${response.contributor}

      ##Test

      The following is needed to run the test:
      ${response.test}
    
      ##Questions

      If you have any questions about the repo, please feel free to reach me via email: ${response.email} or connect with me via GitHub: ${response.username}.
    `
    .then(function (response) {
      const markdown = generateMarkdown(response);
      return writeFile("./util/generateMarkdown.md", markdown);
    })
    .catch((error) => {
      error
        ? console.error(error)
        : console.log("Your ReadMe is generating!!!");
    });
}

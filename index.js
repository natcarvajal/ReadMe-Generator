const inquirer = require("inquirer");
const fs = require("fs");
const out_file = require("./constants").OUTFILE;

const init = () => {
  inquirer
    .prompt([
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
        type: "list",
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
    ])
    .then((respomse) => {
      let markdown = generateMarkdown(respomse);
      fs.writeFile(out_file, markdown, (err) => {
        if (err) throw err;
        console.log("I made a file!");
      });
    })
    .catch((error) => {
      error
        ? console.error(error)
        : console.log("Your ReadMe is generating!!!");
    });
};

function get_license_badge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Eclipse":
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    default:
      return "None";
  }
}

function generateMarkdown(response) {
  console.log(response);
  return `# ${response.title}

  ${get_license_badge(response.license)}

## Description:

${response.description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [License](#license)
* [Contributors](#contributor)
* [Test](#test)
* [Questions](#questions)

## Installation

The following dependencies are necessary for this project to run,<br>
${response.installation}

## Usage

${response.usage}

## Technologies 

This project was created with:<br>
${response.tech} 

## License

This project is licensed under:<br>
${response.license}

## Contributors

${response.contributor}

## Test

The following is needed to run the test:<br>
${response.test}

## Questions

If you have any questions about the repo, please feel free to reach me via email: ${
    response.email
  } or connect with me via GitHub: ${response.github}.
`;
}

init();

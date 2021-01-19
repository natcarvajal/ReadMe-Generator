// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${}/${}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technologies]9(#technologies)
  * [License](#license)
  * [Contributors](#contributor)
  * [Test](#test)
  * [Questions](#questions)
  ##Description
  ${data.description}
  ##Installation

  ##Usage 

  ##Technologies 
    Project was created with: 
  ##License

  ##Contributors

  ##Test

  ##Questions
    If you have any questions, please feel free to reach me at ${data.email}


`;
}

module.exports = generateMarkdown;

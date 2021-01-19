const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
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
  ])
  .then((response) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    error
      ? console.error(error)
      : console.log("Your ReadMe has been generated!");
  });

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

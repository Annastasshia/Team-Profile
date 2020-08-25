const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const renderTeam = teamMembers => {
    fs.writeFile(outputPath, render(teamMembers), () => {});
}
const teamBuilder = () => {

    const addTeam = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "employee",
            message: "What is your team members position?",
            choices: ["Intern","Engineer","Manager", "I'm Done"]
        },


    ]).then(function (data) {

        if(data.employee === "Intern"){
            addIntern();
        };
        if(data.employee === "Engineer"){
            addEngineer();
        };
        if(data.employee === "Manager"){
            addManager();
        };
        if(data.employee === "I'm Done"){
            buildTeam();
        }
        })
    
    }

    const addIntern = () => {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
            },
        ]).then(({name, id, email, school}) => {
            teamMembers.push(new Intern(name, id, email, school));
                inquirer.prompt({
                    type:"confirm",
                    message:" Add another team member?",
                    name: "nextMember"
                }).then(({nextMember}) => {
                if (nextMember) {
                    addTeam();
                } else {
                    renderTeam(teamMembers);
                }
            })
        })
    }

    const addEngineer = () =>{
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is engineer's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is engineer's email?",
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is engineer's gitHub Username?",
            },
        ]).then(({name, id, email, gitHub}) => {
            teamMembers.push(new Engineer(name, id, email, gitHub));
                inquirer.prompt({
                    type:"confirm",
                    message:" Add another team member?",
                    name: "nextMember"
                }).then(({nextMember}) => {
                if (nextMember) {
                    addTeam();
                } else {
                    renderTeam(teamMembers);
                }
            })
        })
    }

    const addManager = () => {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's Office Number?",
            },
        ]).then(({name, id, email, officeNumber}) => {
            teamMembers.push(new Manager(name, id, email, officeNumber));
                inquirer.prompt({
                    type:"confirm",
                    message:" Add another team member?",
                    name: "nextMember"
                }).then(({nextMember}) => {
                if (nextMember) {
                    addTeam();
                } else {
                    renderTeam(teamMembers);
                }
            })
        })
    }

    const teamMembers = [];
    addTeam();

}

console.log(" - Welcome to Employee Team Builder CLI! - ")
console.log(" ")
teamBuilder();
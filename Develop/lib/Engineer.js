// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");


// extend employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github
    }

    getRole(){
     // List Role Overridden to return 'Engineer'
      return "Engineer";
    }
    getGithub(){
        
    // GitHub username
      return `${this.github}`;
    }
  }
  module.exports = Engineer; 
 



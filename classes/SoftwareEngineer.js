/**
Create a class of SoftwareEngineer that extends Employee and has the following additional properties and methods:

programmingLanguages: A private property that holds an array of programming languages the software engineer knows.
getProgrammingLanguages(): A method to return the programmingLanguages that the engineer knows.
setProgrammingLanguage(language): A method to update the programmingLanguages with a new language to the array.

 */

const { Employees } = require("./Employees")

class SoftwareEngineer extends Employees{
#programmingLanguages;
constructor(name, position, salary, isHired, programmingLanguages){
    super(name, position, salary, isHired)
    this.#programmingLanguages = programmingLanguages
    
}

getProgrammingLanguages(){
    return this.#programmingLanguages
}

setProgrammingLanguage(language){
    this.#programmingLanguages.push(language)
}







    
}


const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, true, ["JavaScript", "Java", "Python"]);
programmer.getProgrammingLanguages(); // ["JavaScript", "Java", "Python"]
console.log(programmer.getProgrammingLanguages());
programmer.setProgrammingLanguage("C#"); 
programmer.getProgrammingLanguages(); // ["JavaScript", "Java", "Python", "C#"]
console.log(programmer.getProgrammingLanguages());








module.exports = {
    SoftwareEngineer,
}
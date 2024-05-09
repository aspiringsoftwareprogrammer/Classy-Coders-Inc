/**
Create a subclass Manager that extends Employees (don’t forget to import Employees to the Manager.js file!) and has the following additional property and methods:

department: A string representing the department the manager is in charge of.
employeesManaged: A private property that holds an array of Employees the manager manages. Initializes as an empty array.
getEmployeesManaged(): A method that returns the employees a manager has.
setEmployeesManaged(employee): A method that updates the employeesManaged with a new employee
 */

const { Employees } = require("./Employees")

class Manager extends Employees{
    #employeesManaged = []

constructor(name, position, salary, isHired, department){
    super(name, position, salary, isHired)
    this.department = department;
}

    getEmployeesManaged(){
        return this.#employeesManaged
    }

    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee)
    }
    
}

const jenna = new Manager("Jenna", "Head of Engineers", 120000, "Software Engineering", 10);
jenna.getEmployeesManaged(); // []
console.log(jenna.getEmployeesManaged())
const preston = new Employees("Preston", "Engineer", 100000);
jenna.setEmployeesManaged(preston);
jenna.getEmployeesManaged(); // [ Employee ]
console.log(jenna.getEmployeesManaged())


module.exports = {
    Manager,
}
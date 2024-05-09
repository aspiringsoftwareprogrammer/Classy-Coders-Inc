/**
name: A string representing the name of the employee.
position: A string representing the position of the employee.
salary: A private number representing the salary of the employee.
isHired: A private field that initializes with a value of true.
getSalary(): A method that returns the salary of the employee.
setSalary(amount): A method that updates the salary of the employee.
getStatus(): A method that returns the value of isHired.
setStatus(command): A method that updates isHired to:
true if command is "hire"
false if command is "fire"
 
allEmployees: A private static private property that initializes as an empty array. Every time a new Employee is 
created they are added to the end of this array.
getEmployees: A static method that returns the array of allEmployees.
getTotalPayroll(): A static method that returns the total salaries of all employees that are stored in the allEmployees array.

*/

const { Manager } = require('./Manager');
const { SoftwareEngineer } = require('./SoftwareEngineer');
const { SalesPerson } = require('./SalesPerson');

class Employees {
#salary
#isHired = true
static #allEmployees = []

constructor(name, position, salary, isHired){
    this.name = name;
    this.position = position;
    this.#salary = salary;
  
}

    static getEmployees(){
        return this.#allEmployees
    }

    static getTotalPayroll(){
        let total = 0
        for(let i =0; i < this.#allEmployees.length; i++){
            total += this.#allEmployees[i].getSalary()
        }
        return total

    }


    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        this.#salary = amount
    }

    getStatus(){
        return this.#isHired
    }
    
    setStatus(command){
        if(command === "hire"){
            this.#isHired = true
        }else {
            this.#isHired = false
        }
    }

}



module.exports = {
    Employees,
}


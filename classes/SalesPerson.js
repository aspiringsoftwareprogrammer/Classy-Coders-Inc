/**
Create a class of SalesPerson that extends Employee and has the following additional properties and methods:

clients: A property that holds an array of clients the salesperson manages.
totalSales: A private field that contains the value of total sales the employee has performed. Initializes with a value of 0.
getSalesNumbers(): A method that returns the totalSales for the salesperson.
makeSale(amount): A method that updates the totalSale with the amount.
 */

const { Employees } = require("./Employees")


class SalesPerson extends Employees{
    #totalSales
    constructor(name, position, salary, isHire, clients, totalSales){
        super(name, position, salary, isHire)
        this.clients = clients
        this.#totalSales = totalSales
}

getSalesNumber(){
    return this.#totalSales;
}

makeSale(amount){
    this.#totalSales = amount
}



   
}


//const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"], 0)
const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, true, ["Vine", "MySpace", "Shutterfly"], 0);
malik.getSalesNumber(); // 0
console.log(malik.getSalesNumber());
malik.makeSale(10500);
malik.makeSale(20000);
malik.getSalesNumber();
console.log(malik.getSalesNumber())



module.exports = {
    SalesPerson,
}
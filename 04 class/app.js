"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
const accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe();

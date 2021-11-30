"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    // setter
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accountingDepartment = new AccountingDepartment("idx", []);
accountingDepartment.mostRecentReport = 'Hello Report';
console.log(accountingDepartment.mostRecentReport);

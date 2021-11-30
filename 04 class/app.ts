class Department {
    static fiscalYear = 2021;
  constructor(private id: string, private name: string) {}
  static createEmployee(name:string){
      return {name}
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(report: string) {
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


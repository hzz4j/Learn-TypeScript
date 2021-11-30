class Department {
  constructor(private id: string, private name: string) {}
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accountingDepartment = new AccountingDepartment('idx',[]);
accountingDepartment.addReport('Something error happen.');
accountingDepartment.printReports();
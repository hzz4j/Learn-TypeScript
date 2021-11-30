abstract class Department {
  constructor(protected id: string, private name: string) {}
  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  static instance: ITDepartment;
  private constructor(id: string) {
    super(id, "IT");
  }

  describe(this: ITDepartment) {
    console.log("IT Department id - " + this.id);
  }

  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance;
    }
    this.instance = new ITDepartment("idx");
    return this.instance;
  }
}

class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, private n: string) {}

  updateId(){
      // 不能更新 error
      //this.id = 'xxx';
  }
}

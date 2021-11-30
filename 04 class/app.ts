abstract class Department {
  constructor(protected id: string, private name: string) {}
  abstract describe(this: Department): void;
}

class ITDepartment extends Department{

    constructor(id:string){
        super(id,'IT');
    }

    describe(this: ITDepartment) {
        console.log('IT Department id - '+this.id);
    }
}
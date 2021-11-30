"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class ITDepartment extends Department {
    constructor(id) {
        super(id, "IT");
    }
    describe() {
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

"use strict";
class Person {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user1 = new Person();
user1.greet('Hi there,I\'m '); // 输出： Hi!

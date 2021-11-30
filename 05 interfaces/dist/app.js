"use strict";
class Person {
    constructor(n) {
        this.score = 100;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
}
let user1 = new Person("静默");
user1.greet('Hi there,I\'m ');

interface Greetable {
  readonly name?: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
        console.log(phrase+this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable = new Person();
user1.greet('Hi there,I\'m '); // 输出： Hi!
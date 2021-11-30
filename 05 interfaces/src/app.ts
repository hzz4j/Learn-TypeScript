interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  score: number = 100;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase:string){
      console.log(phrase+this.name);
      
  }
}

let user1: Greetable = new Person("静默");
user1.greet('Hi there,I\'m ');

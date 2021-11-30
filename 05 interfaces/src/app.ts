interface Person {
  name: string;
  score: number;
  greet(phrase: string): void;
}

let user1: Person = {
  name: "静默",
  score: 100,
  greet(phrase: string) {
    console.log("Greet: " + phrase);
  },
};

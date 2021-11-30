function addNumbers(...numbers: [number, number, number]) {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
}

console.log(addNumbers(5, 10, 3.7));

const hobbies = ["Sport", "Reading"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

const hobbActivies = [...hobbies];

const person = {
  name: "静默",
  developer: "Java",
};

const { name: nameAlias, developer } = person;

const Q10Viking = { ...person };

const printOut1: (msg: string) => void = (msg) => console.log(msg);
const printOut2 = (msg: string) => console.log(msg);

console.log(printOut1("Hello World"));
console.log(printOut2("Hello World"));

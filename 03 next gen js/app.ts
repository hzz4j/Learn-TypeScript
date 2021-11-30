function addNumbers(...numbers: [number, number, number]) {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
}

console.log(addNumbers(5, 10, 3.7));

const hobbies = ["Sport", "Reading"];
const hobbActivies = [...hobbies];

const person = {
  name: "静默",
  developer: "Java",
};

const Q10Viking = { ...person };


const printOut:(msg:string)=>void = msg => console.log(msg);
console.log(printOut('Hello World'));

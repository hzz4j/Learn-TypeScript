const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success:)");
  }, 3000);
});

promise.then((data) => {
  data.split("");
});

function merge<T, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// error will not work
//const mergedObj = merge({ name: "静默", hobbies: ["Codeing", "Reading"] }, "");

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Coding","Reading"]));


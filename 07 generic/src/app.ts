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
const mergedObj = merge({ name: "静默", hobbies: ["Codeing", "Reading"] }, "");

console.log(mergedObj);

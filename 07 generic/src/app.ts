const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success:)");
  }, 3000);
});

promise.then((data) => {
  data.split("");
});

function merge<T, U>(objA: T, objB: U) {
  // return 的类型会推断为 T & U
  return Object.assign(objA, objB);
}
// merge<{name: string;hobbies: string[];}, {score: number;}>(参数。..)
const mergedObj = merge(
  { name: "静默", hobbies: ["Codeing", "Reading"] },
  { score: 100 }
);

console.log(mergedObj);


"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success:)");
    }, 3000);
});
promise.then((data) => {
    data.split("");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// error will not work
const mergedObj = merge({ name: "静默", hobbies: ["Codeing", "Reading"] }, "");
console.log(mergedObj);

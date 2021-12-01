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
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Coding", "Reading"]));

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
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
// error
// extractAndConvert({ name: "静默" }, "age");
console.log(extractAndConvert({ name: "静默" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        const index = this.data.indexOf(item);
        if (index === -1) {
            return;
        }
        this.data.splice(index, 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();

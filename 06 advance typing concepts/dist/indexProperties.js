"use strict";
const userInputElement = document.getElementById("user-input");
// 不用！自己来检测
if (userInputElement) {
    userInputElement.value = "Hello TypeScript";
}
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character"
};

"use strict";
function add(a, b) {
    // type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    // 这样这里就是number的相加了
    return a + b;
}
const result = add("Q10 ", "Viking");
result.split(" ");

function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineMoney = combine(100, 300.3);
console.log(combineMoney);
var combineMsg = combine('静默', ' learning TypeScript');
console.log(combineMsg);

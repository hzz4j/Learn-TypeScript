function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineMoney1 = combine(100, 300.3, "as-number");
console.log(combineMoney1);
var combineMoney2 = combine("100", "300.3", "as-number");
console.log(combineMoney2);

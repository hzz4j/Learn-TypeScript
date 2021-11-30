function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combineMoney1 = combine(100, 300.3, "as-number");
console.log(combineMoney1); //  400.3
const combineMoney2 = combine("100", "300.3", "as-number");
console.log(combineMoney2); //  400.3

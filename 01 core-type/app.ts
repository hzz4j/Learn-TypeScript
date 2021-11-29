function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combineMoney = combine(100,300.3)
console.log(combineMoney);

const combineMsg = combine('静默',' learning TypeScript');
console.log(combineMsg);


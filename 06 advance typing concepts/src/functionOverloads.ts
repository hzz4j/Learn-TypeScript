type Combineable = number | string;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combineable, b: Combineable) {
  // type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  // 这样这里就是number的相加了
  return a + b;
}

const result = add("Q10 ", "Viking");
result.split(" ");

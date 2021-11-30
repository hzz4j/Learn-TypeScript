function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(3, 5, (r) => {
  console.log("Result is " + r);
});

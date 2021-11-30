const userInputElement = document.getElementById("user-input");
// 不用！自己来检测
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hello TypeScript";
}

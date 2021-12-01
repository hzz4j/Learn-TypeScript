const userInputElement = document.getElementById("user-input");
// 不用！自己来检测
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hello TypeScript";
}

// index properties
interface ErrorContainer {
  [props: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character"
};

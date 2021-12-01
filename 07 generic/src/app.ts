const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success:)");
  }, 3000);
});

promise.then((data) => {
  data.split("");
});

function merge<T, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// error will not work
//const mergedObj = merge({ name: "静默", hobbies: ["Codeing", "Reading"] }, "");

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Coding", "Reading"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
// error
// extractAndConvert({ name: "静默" }, "age");
console.log(extractAndConvert({ name: "静默" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const index = this.data.indexOf(item);
    if (index === -1) {
      return;
    }
    this.data.splice(index, 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

const cities: Readonly<string[]> = ["BeiJing", "GuiLin"];
// error
//cities.pop();

interface CourseGoal {
  name: string;
  description: string;
  completeUtil: Date;
}

function createCourseGoal(
  name: string,
  description: string,
  completeUtil: Date
) {
  // Partial的作用Make all properties in T optional
  //let courseGoal: CourseGoal = {};
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.name = name;
  courseGoal.description = description;
  courseGoal.completeUtil = completeUtil;
  return courseGoal as CourseGoal;
}

let courseGoal: CourseGoal = createCourseGoal(
  "Learn Typescript",
  "静默Come on",
  new Date()
);


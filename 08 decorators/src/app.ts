//=======================================================
interface ValidConfig {
  [properties: string]: {
    [properties: string]: string[];
  };
}
const registeredValidators: ValidConfig = {};

function Require(target: any, name: string) {
  console.log("require");
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [name]: ["require"],
  };
}

function PositiveNum(target: any, name: string) {
  console.log("PositiveNum");

  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [name]: ["positiveNum"],
  };
}

function valid(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return;
  }
  let isValid = true;
  console.log(objValidatorConfig);

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "require":
          isValid = isValid && !!obj[prop];
          break;
        case "positiveNum":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
//=======================================================

class Course {
  @Require
  title: string;
  @PositiveNum
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const form = document.querySelector("form")!;
const formButton = form.querySelector("button")!;

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  const titlEl = form.querySelector("#title")! as HTMLInputElement;
  const priceEl = form.querySelector("#price")! as HTMLInputElement;

  const title = titlEl.value;
  const price = +priceEl.value;

  const createCourse = new Course(title, price);
  console.log(createCourse);

  if (!valid(createCourse)) {
    alert("Invalid input,please try again!");
    return;
  }
  console.log(createCourse);
});

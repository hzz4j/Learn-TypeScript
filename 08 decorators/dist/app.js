"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function Require(target, name) {
    console.log("require");
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [name]: ["require"] });
}
function PositiveNum(target, name) {
    console.log("PositiveNum");
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [name]: ["positiveNum"] });
}
function valid(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Require
], Course.prototype, "title", void 0);
__decorate([
    PositiveNum
], Course.prototype, "price", void 0);
const form = document.querySelector("form");
const formButton = form.querySelector("button");
formButton.addEventListener("click", (e) => {
    e.preventDefault();
    const titlEl = form.querySelector("#title");
    const priceEl = form.querySelector("#price");
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
//# sourceMappingURL=app.js.map
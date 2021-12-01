"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(target, name, propertyDescriptor) {
    console.log(propertyDescriptor);
    const originalMethod = propertyDescriptor.value;
    // 修改方法的描述
    const adjDescriptor = {
        // get是PropertyDescriptor接口的规范
        get() {
            console.log("xxx");
            console.log(this); // 这个例子就是Printer,因为方法绑定了@AutoBind
            // 给原来的方法绑定了this
            const boundFn = originalMethod.bind(this); // this是只被调的实例，当然是被修饰的方法
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.msg = "This works!";
    }
    showMsg() {
        console.log(this.msg);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMsg", null);
const button = document.getElementById("app");
const p = new Printer();
// bind 让this指向p
//button.addEventListener('click',p.showMsg.bind(p));
// autobind
button.addEventListener("click", p.showMsg);

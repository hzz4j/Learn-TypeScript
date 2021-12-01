"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function withTemplate(template, hookId) {
    console.log("Step 1");
    // T extends 一个方法的type,也可以直接写成 T extends new (...args: any[]) => { name: string }
    return function (originalConstructor) {
        console.log("Step 2");
        // 返回一个新的class，该类继承原有的类，做了一些修改
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Step 3");
                const hookEl = document.getElementById(hookId);
                const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
// decorator会在类定义的地方执行
let Person = class Person {
    constructor(name = "静默") {
        this.name = name;
    }
};
Person = __decorate([
    withTemplate("<h1>Hello TypeScript</h1>", "app")
], Person);
// step 3只会在实例化的时候才执行
const person = new Person();

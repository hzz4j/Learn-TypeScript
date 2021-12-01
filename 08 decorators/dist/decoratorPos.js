"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logging(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function LogProperty(target, name) {
    console.log("Property Decorator");
    console.log(target);
    console.log(name);
}
function LogAccessor(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function LogMethod(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function LogParameter(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(n, p) {
        this.title = n;
        this._price = p;
    }
    set price(val) {
        if (val >= 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    getPricewithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    LogProperty
], Product.prototype, "title", void 0);
__decorate([
    LogAccessor
], Product.prototype, "price", null);
__decorate([
    LogMethod,
    __param(0, LogParameter)
], Product.prototype, "getPricewithTax", null);

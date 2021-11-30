var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
}
console.log(addNumbers(5, 10, 3.7));
var hobbies = ["Sport", "Reading"];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2, remainingHobbies);
var hobbActivies = __spreadArray([], hobbies, true);
var person = {
    name: "静默",
    developer: "Java"
};
var nameAlias = person.name, developer = person.developer;
var Q10Viking = __assign({}, person);
var printOut1 = function (msg) { return console.log(msg); };
var printOut2 = function (msg) { return console.log(msg); };
console.log(printOut1("Hello World"));
console.log(printOut2("Hello World"));

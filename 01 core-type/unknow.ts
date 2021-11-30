let userInput: unknown;
let username: string;

userInput = 5;
// error unknown会做类型检查
//username = userInput;
userInput = "静默";
// 不能将类型“unknown”分配给类型“string”
//username = userInput;

// 需要用if来做类型推断
if(typeof userInput === 'string'){
    username = userInput;
}

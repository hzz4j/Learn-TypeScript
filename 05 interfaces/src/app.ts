// type AddFn = (number1:number,number2:number)=>number;
interface AddFn{
    (number1:number,number2:number):number;
}

let add:AddFn;
add = (number1,number2)=>number1+number2;

console.log(add(1,2));

function Logging(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}



function LogProperty(target: any, name: string) {
  console.log("Property Decorator");
  console.log(target);
  console.log(name);
}

function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogMethod(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogParameter(target: any, name: string, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @LogProperty
  title: string;
  private _price: number;

  @LogAccessor
  set price(val: number) {
    if (val >= 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(n: string, p: number) {
    this.title = n;
    this._price = p;
  }

  @LogMethod
  getPricewithTax(@LogParameter tax: number) {
    return this._price * (1 + tax);
  }
}

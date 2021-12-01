function withTemplate(template: string, hookId: string) {
  console.log("Step 1");

  // T extends 一个方法的type,也可以直接写成 T extends new (...args: any[]) => { name: string }
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    console.log("Step 2");
    // 返回一个新的class，该类继承原有的类，做了一些修改
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Step 3");
        const hookEl = document.getElementById(hookId);
        const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// decorator会在类定义的地方执行
@withTemplate("<h1>Hello TypeScript</h1>", "app")
class Person {
  constructor(public name: string = "静默") {}
}

// step 3只会在实例化的时候才执行
const person = new Person();

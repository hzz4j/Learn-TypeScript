function AutoBind(
  target: any,
  name: string,
  propertyDescriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log(propertyDescriptor);

  const originalMethod = propertyDescriptor.value;
  // 修改方法的描述
  const adjDescriptor: PropertyDescriptor = {
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
  msg = "This works!";

  @AutoBind
  showMsg() {
    console.log(this.msg);
  }
}

const button = document.getElementById("app")!;
const p = new Printer();
// bind 让this指向p
//button.addEventListener('click',p.showMsg.bind(p));

// autobind
button.addEventListener("click", p.showMsg);

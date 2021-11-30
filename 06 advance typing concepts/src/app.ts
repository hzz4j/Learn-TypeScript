type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInfomation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    // type guard
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("startDate: " + emp.startDate);
  }
}

printEmployeeInfomation({
  name: "静默",
  privileges: ["create-server"],
  startDate: new Date(),
});

class Car {
  drive() {
    console.log("Driving ... ...");
  }
}
class Truck {
  // 卡车
  drive() {
    console.log("Driving a truck... ...");
  }

  // cargo 货物
  loadCargo(amount: number) {
    console.log(`Loading ${amount} cargo... ...`);
  }
}
// 车辆
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle)
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "Bird";
  flyingSpeed: number;
}

interface Horse {
  type: "Horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "Bird":
      speed = animal.flyingSpeed;
      break;
    case "Horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

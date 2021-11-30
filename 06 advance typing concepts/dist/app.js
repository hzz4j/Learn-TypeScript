"use strict";
function printEmployeeInfomation(emp) {
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
    loadCargo(amount) {
        console.log(`Loading ${amount} cargo... ...`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ("loadCargo" in vehicle)
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
useVehicle(v2);

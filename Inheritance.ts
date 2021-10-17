export{}
class Car{
    move():void{
        console.log("Move");
    }
    brake():void{
        console.log("Brake");
    }
}
class Audi extends Car{
    autoPilot():void{
        console.log("Auto Pilot");
    }
    autoGear():void{
        console.log("Auto Gear");
    }
}
//object creation for car class
let car=new Car();
console.log("Inside Car Class : ")
car.move();
car.brake();
//object creation for audi class
let audi=new Audi();
console.log("Inside Audi Class : ")
audi.move();
audi.brake();
audi.autoPilot();
audi.autoGear();

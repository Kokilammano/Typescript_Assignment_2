export{}
class Engine{
    engineNumber:number;
    mftYear:number;
    company:string;
    constructor(engineNumber:number,mftYear:number,company:string){
        this.engineNumber=engineNumber;
        this.mftYear=mftYear;
        this.company=company;
    }
}
class Car{
    modelNo:number;
    mftYear:string;
    engine:Engine;
    constructor(modelNo:number,mftYear:string,engine:Engine){
        this.modelNo=modelNo;
        this.mftYear=mftYear;
        this.engine=engine;
    }
}
let eng:Engine=new Engine(100,2020,"Maruthi");
let car:Car=new Car(101,"2021",eng);
console.log(car);
console.log(car.modelNo);
console.log(car.mftYear);
console.log(car.engine);

class Vehicle {
    constructor(np) {
        this.np = np;
    }
    getNumberPlate() {
        console.log(np);
    }

}


class Car extends Vehicle {
    constructor(np, color) {
        super(np);
        this.color = color;
    }
    printCar() {
        console.log(`numPlate:${this.np},name:${this.name}`);
    }
}


class ElectricCar extends Car{
    constructor(np,battery){
        super(np);
        this.battery=battery;
    }
}

let Maruti=new Car(`324flkjd`,`brown`);
let Nexon= new ElectricCar(`23432bkjdsfh`,`black`,`40`);
console.log(Maruti);
console.log(Nexon);
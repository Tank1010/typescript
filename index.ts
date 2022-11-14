interface Shape{
    getArea: ()=>number;
}

class Retange implements Shape{
    public constructor(protected width:number, protected height:number){}
    public getArea():number{
        return this.height*this.width;
    }
    
}

class Square extends Retange{
    public constructor(width:number){
        super(width, width)
    }
}



interface ShapeOfCar{
    name :string;
    price : number;
}

enum NumberBruh{
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH
}

class Car{
    private name:string;
    private price:number;
    constructor(input ?:ShapeOfCar){
        this.name = input?.name ??"toyota";
        this.price = input?.price?? 0;
    }
    Car(){
        return `Name of the car is ${this.name} and Price is ${this.price} dollar`;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }
    setName(name:string){
        this.name = name;
    }
    setPrice(price:number){
        this.price = price;
    }
}
var penta:Car = new Car();
console.log(penta.Car())

var carArray:Car[] = [];
var Toyota = new Car({name:"ToyotaCamry", price:2000});
console.log(Toyota.Car());
carArray.push(Toyota);

Toyota.setName("Honda KiaMorning");
carArray.push(Toyota);
console.log(Toyota.Car());

Toyota.setPrice(5000)
carArray.push(Toyota);
console.log(Toyota.Car());


console.log(carArray)

console.log(NumberBruh.FIRST)

console.log(new Square(12).getArea());

function thatPrettyShit<S,T>(p1: S, p2: T): [S,T]{
    return [p1, p2];
}

var thatPair =thatPrettyShit<String, String>("arrayMax","onehunder");
console.log(thatPair);






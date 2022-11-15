var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Retange = /** @class */ (function () {
    function Retange(width, height) {
        this.width = width;
        this.height = height;
    }
    Retange.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Retange;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Retange));
var NumberBruh;
(function (NumberBruh) {
    NumberBruh[NumberBruh["FIRST"] = 0] = "FIRST";
    NumberBruh[NumberBruh["SECOND"] = 1] = "SECOND";
    NumberBruh[NumberBruh["THIRD"] = 2] = "THIRD";
    NumberBruh[NumberBruh["FOURTH"] = 3] = "FOURTH";
    NumberBruh[NumberBruh["FIFTH"] = 4] = "FIFTH";
})(NumberBruh || (NumberBruh = {}));
var Car = /** @class */ (function () {
    function Car(input) {
        var _a, _b;
        this.name = (_a = input === null || input === void 0 ? void 0 : input.name) !== null && _a !== void 0 ? _a : "toyota";
        this.price = (_b = input === null || input === void 0 ? void 0 : input.price) !== null && _b !== void 0 ? _b : 0;
    }
    Car.prototype.Car = function () {
        return "Name of the car is ".concat(this.name, " and Price is ").concat(this.price, " dollar");
    };
    Car.prototype.getName = function () {
        return this.name;
    };
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.setName = function (name) {
        this.name = name;
    };
    Car.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Car;
}());
var penta = new Car();
console.log(penta.Car());
var carArray = [];
var Toyota = new Car({ name: "ToyotaCamry", price: 2000 });
console.log(Toyota.Car());
carArray.push(Toyota);
Toyota.setName("Honda KiaMorning");
carArray.push(Toyota);
console.log(Toyota.Car());
Toyota.setPrice(5000);
carArray.push(Toyota);
console.log(Toyota.Car());
console.log(carArray);
console.log(NumberBruh.FIRST);
console.log(new Square(12).getArea());
function thatPrettyShit(p1, p2) {
    return [p1, p2];
}
var thatPair = thatPrettyShit("arrayMax", "onehunder");
console.log(thatPair);
var a = '5';
console.log(typeof a);
var LetDoThis = /** @class */ (function () {
    function LetDoThis() {
    }
    LetDoThis.prototype.contructor = function (_nameOfName) {
        this._nameOfName = _nameOfName;
    };
    LetDoThis.prototype.setValue = function (value) {
        this._name = value;
    };
    LetDoThis.prototype.getValue = function () {
        return this._name;
    };
    LetDoThis.prototype.toString = function () {
        return "".concat(this._nameOfName, ": ").concat(this._name);
    };
    return LetDoThis;
}());
var doThis = new LetDoThis();
doThis.setValue(5);
console.log(doThis.toString());

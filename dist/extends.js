"use strict";
class shape {
    area() {
        console.log("hey here is area");
    }
}
class rectangle extends shape {
    constructor(width, heigth) {
        super();
        this.width = width;
        this.heigth = heigth;
    }
}
let rec1 = new rectangle(20, 20);
console.log(rec1.width);
console.log(rec1.heigth);
console.log(rec1.area());

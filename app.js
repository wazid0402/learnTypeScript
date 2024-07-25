"use strict";
// const num:number = 10;
// console.log(num);
function addNum(num1, num2) {
    return num1 + num2;
}
// this below line will give compile time error and will not update js file while running "tsc app.ts"
//let result = addNum('10',20);
// this below line will works fine.
let result = addNum(10, 20);
console.log(result);
let data;
data = 10;
data = "hello";
console.log(data);

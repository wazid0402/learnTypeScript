"use strict";
//Define type like variable and reuse it.
let data = 123;
let data1 = "wazid";
let data2 = true;
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20));
console.log(combine("wazid", "anku"));

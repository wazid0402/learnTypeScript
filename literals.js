"use strict";
// In literals type rather than applying types we apply values.
//example1:- 
let Datatest = "Hello"; // this is not litrerals as we are using types.
let Data1 = "abc"; // this is literals.
let Data2 = "123"; // this is literals.
//let Data3: "abc" | "123" = "xyz" // this is literals but typescript will give error as xyz is not accepted.
//example2: - 
function combine(a, b, type) {
    if (type === "as-number") {
        // return a+b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20, "as-number"));
console.log(combine("wazid", "anku", "as-string"));

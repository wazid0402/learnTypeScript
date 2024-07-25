//Define type like variable and reuse it.

//example1: - 
type myAlias = number | string | boolean;
let data: myAlias = 123;
let data1: myAlias = "wazid";
let data2: myAlias = true;

//example2: -   
type myAlias2 =  number | string
function combine(a: myAlias2, b: myAlias2){
if(typeof a === "number" && typeof b === "number"){
    return a+b
}else{
    return a.toString() + b.toString()
}
}
console.log(combine(10, 20))
console.log(combine("wazid", "anku"))

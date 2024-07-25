// By normal javascript way.
let arr = ['wazid', 123, true];  //this is correct.

// By typescript way.
let myarr:string[] = ['wazid','anku','abishek']; // this is correct.

//let myarr1:string[] = ['wazid', 123, false] // this is incorrect and will give error that number is not assignable to string

let myarr2:string[] = ['wazid','anku']
myarr2.push('jasmine') //this is correct
//myarr2.push(123) // this is incorrect
//myarr2.push(true) // this is also Incorrect

let newarr:[string, number, boolean] = ['wazid', 123, true]; // this is correct and called tuple

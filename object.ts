// const person:object = {
//     name: 'wazid',
//     age: 29,
//     email: 'xyz@gmail.com'
// }
// console.log(person);

//This one is same as above
// const person:{} = {
//     name: 'wazid',
//     age: 29,
//     email: 'xyz@gmail.com'
// }
// console.log(person);

// Error senario
// const person:{} = {
//     name: 'wazid',
//     age: 29,
//     email: 'xyz@gmail.com'
// }
// console.log(person.name); // because person is of blank type object and object is not having name key thus it will throw error.

// Success senario
const person:{name:string; age:number; email:string} = {    // note here each key value is seperated by ;
    name: 'wazid',
    age: 29,
    email: 'xyz@gmail.com'
}
console.log(person.name);
// const person1:{name:string; age:number; email:string} = {    // note here each key value is seperated by ;
//     name: 'wazid',
//     age: 29,
//     email: 'xyz@gmail.com'
// }
// console.log(person1.name);

// const person2:{name:string; age:number; email:string} = {    // note here each key value is seperated by ;
//     name: 'Anku',
//     age: 28,
//     email: 'xyz@gmail.com'
// }
// console.log(person2.name);

// const person3:{name:string; age:number; email:string} = {    // note here each key value is seperated by ;
//     name: 'Sumit',
//     age: 27,
//     email: 'xyz@gmail.com'
// }
// console.log(person3.name);

// Now to avoid creating this object type {name:string; age:number; email:string} multiple times
// we can create one object type and use it with multiple objects.

type myObj = {
    name: string;
    age: number;
    email: string
}

const person1:myObj = {    // note here each key value is seperated by ;
    name: 'wazid',
    age: 29,
    email: 'xyz@gmail.com'
}
console.log(person1.name);

const person2:myObj = {    // note here each key value is seperated by ;
    name: 'Anku',
    age: 28,
    email: 'xyz@gmail.com'
}
console.log(person2.name);

const person3:myObj = {    // note here each key value is seperated by ;
    name: 'Sumit',
    age: 27,
    email: 'xyz@gmail.com'
}
console.log(person3.name);

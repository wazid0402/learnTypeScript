// Enum in typescript contains a group of constant.
// It assign numbers to your string and make easy comparision
// When we do Role. then it automatically shows all the options and we don't need to remember.

enum Role {
    ADMIN, Manager, READ_ONLY_USERS
}

console.log(Role)
console.log(Role.ADMIN)
console.log(Role.Manager)
console.log(Role.READ_ONLY_USERS)
console.log(Role['0'])
console.log(Role['1'])
console.log(Role['2'])
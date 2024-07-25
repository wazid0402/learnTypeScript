let data: string | number | boolean = 'wazid'
let data1: string | number | boolean = 123
let data2: string | number | boolean = true

//or we can use any type

let datatest:any  = 'wazid'
datatest = 123
datatest = true

//Better not to use any if you are sure what kind of data is coming.

//let dataarr:any[] = 10 // will give error
let dataarr1:any[] = [10] // It is correct

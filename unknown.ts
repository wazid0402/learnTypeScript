// with any
let data:any;
data = 123
data = 'wazid'

//with unknown
let data1: unknown;
data1 = 123
data1 = 'wazid'

// Note- Above both example is correct. then what is the difference between any and unknown.
// unknown is smarter than any.

let dataAny: any;
dataAny = 123
dataAny = 'wazid'
let itemAny:string
itemAny = dataAny;  // this line will not give erroe because type any has switched off the power of typescript.

let dataUnknown: unknown;
dataUnknown = 123
dataUnknown = 'wazid'
let itemUnkown:string
//itemUnkown = dataUnknown; // this line will throw error because type unknown is smart. you cannot unknown type to string type.
                          
"use strict";
// with any
let data;
data = 123;
data = 'wazid';
//with unknown
let data1;
data1 = 123;
data1 = 'wazid';
// Note- Above both example is correct. then what is the difference between any and unknown.
// unknown is smarter than any.
let dataAny;
dataAny = 123;
dataAny = 'wazid';
let itemAny;
itemAny = dataAny; // this line will not give erroe because type any has switched off the power of typescript.
let dataUnknown;
dataUnknown = 123;
dataUnknown = 'wazid';
let itemUnkown;
//itemUnkown = dataUnknown; // this line will throw error because type unknown is smart. you cannot unknown type to string type.

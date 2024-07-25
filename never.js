"use strict";
// this function will return true and its function type is boolean
function testFunc() {
    return true;
}
console.log(testFunc());
// this function will retrun undefined and its default function type is void.
function testFunc1() {
}
console.log(testFunc1());
// this function will give error and its default function type is void.
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError('server side error', 500));
// this function will give error and we explictly define its type as never to write the standard code.
function apiError1(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError1('server side error', 500));

const accountId = 144553
let accountEmail = "himanshu@google.com"
var accountPassword = "123456789"
accountCity="Hyderabad"
//const  means it cant be changed

// accountId = 2
console.log(accountId)

let accountState;  //iske bare me koi jaankari uplabdh nhi hai

console.table([accountId , accountEmail, accountPassword, accountCity,accountState]);

/*
In javascript it is recommended not to use var instead use let ,cause of certain scope issues
*/

"use strict";

//Alert
// alert(3+3)  . We are using node , hence there will be no alert

//Data types 
let name="Himanshu Tiwari"
let age = 18
let isLoggedIn = true;
//Number => range 2 to power 53 even bigger ke liye we use big int

/*null => standalone Value;
undefined => value has not been assigned
symbol => used to find uniqueness
*/

console.log(typeof(null))   //Note null is a type of object
console.log(typeof(undefined)) //typeof(undefined) is undefined

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof(stringNumber));






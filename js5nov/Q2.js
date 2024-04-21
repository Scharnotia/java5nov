/* Describe the usage of the comma operator in JavaScript and provide an example.

Comma opeartor is used to evalute multiple expression in a single line and returns the value which is detemined after the last expression. */


let Value_one = 5;
let another_value = (Value_one++, Value_one *= 2, Value_one+= 10);
console.log(another_value);
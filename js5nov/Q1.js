/*Explain the usage of ternary operator with syntax and write a program to check whether the number is even
or odd using the ternary operator.

The ternary operator is used to check whether a condition is true or false in a single line.
It consist of one condition and two expression.
Condition ? Expression1 : Expression2 
here first Condition is checked if the condition is true then expression1 is executed and if the condion is false then expression2 is executed.
*/

let Value = 5

let odd_even_number = Value/2==0 ? 'Value is Even' : 'Value is Odd' ;

console.log(odd_even_number);
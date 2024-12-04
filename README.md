# Divisibility Checker for 2, 3, and 5

## Description

This program checks if a given number is divisible by 2, 3, or 5. It outputs:
- 1 if the number is divisible by exactly one of these values.
- 2 if the number is divisible by exactly two of these values.
- 3 if the number is divisible by all three values (2, 3, and 5).

### Features:
- Checks divisibility by 2, 3, and 5.
- Outputs a number representing how many of these values divide the given number without a remainder.

### Example:
For the number 90:
- It is divisible by 2, 3, and 5.
- The program outputs 3.

## Programmers

- *אליאס דבאג*
- *נור עמאר*

## Code

```javascript
const num = 90;
console.log(Number(num % 5 == 0) + Number(num % 3 == 0) + Number(num % 2 == 0)); 
// Using Number() function to convert from boolean to number. If true, it converts to 1, then the results are summed.

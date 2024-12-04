//programers names:    אליאס דבאג      נור עמאר

// question 1 checking if the number we put is divided on 5 3 2 if only divided on one of them we print 1 and if its divided on 2 numbers (from 5 3 2)we print 2 and if all of them then we print 3
const num=90;
console.log(Number(num%5==0)+Number(num%3==0)+Number(num%2==0))//we using Number() func to convert from boolean to number if we get true then convert to 1 and sum them


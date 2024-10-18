"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
 
  if (discriminant === 0) {
    arr.push( -b/(2 * a) ); 
  }
 
  if (discriminant > 0) {
    arr.push( (-b + Math.sqrt(discriminant) )/(2 * a) ); arr.push( (-b - Math.sqrt(discriminant) )/(2 * a) ); 
  }
 
  return arr;
}

 function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   let loanBody = amount - contribution;
   let monthlyRate = percent/100/12;
   let paymentPerMonth = loanBody  * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), countMonths) - 1)));
   let fullPayment = countMonths * paymentPerMonth;
   let result = (fullPayment).toFixed(2);
   
   return +result; 
 }
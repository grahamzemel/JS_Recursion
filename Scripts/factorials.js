function factorial(factNum) { 

  if (factNum === 0) return 1;
  return factNum * factorial(factNum-1);
         
}
console.log(factorial(5));
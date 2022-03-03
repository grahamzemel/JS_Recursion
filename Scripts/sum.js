const sum = (targetSum) => { 
  if(targetSum.length === 1){
    return targetSum[0];
  }  //if length is 1 number, return that number
  else{
    return targetSum.pop() + sum(targetSum);
  }

}
console.log(sum([6, 4, 8]));
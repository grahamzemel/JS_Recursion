const gcd = (numa, numb) => { 
  if (!numb) return numa;
  return gcd(numa, numa % numb)
}
console.log(gcd(100, 25));
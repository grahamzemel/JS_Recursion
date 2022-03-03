const findrange = (start, end) => { 
  
  if (end - start === 2) return [start + 1];
  else 
  {
    var list = findrange(start, end - 1);
    list.push(end - 1);
    return list;
  }

}
console.log(findrange(5, 12));
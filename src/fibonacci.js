const fibonacci = (n) => {
  for(var arrayFibo = [1], i = 0, j = 1, k = 0; 
        k < n - 1;
        i = j, j = x, k++){
    x = i + j;
    arrayFibo.push(x);
  } 
  return arrayFibo
}

module.exports = fibonacci;
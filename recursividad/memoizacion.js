function fibonacci(num, memoria = {}) {
  if (memoria[num]) return memoria[num];
  if (num == 1) return 0;
  if (num == 2) return 1;
  else return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num - 2, memoria);
}

console.log(fibonacci(20));

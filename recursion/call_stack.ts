function fact(x: number): number {
  if (x === 1) {
    return 1;
  } else {
    // each time we call fact we're stacking it
    return x * fact(x - 1);
  }
}

console.log(fact(10));

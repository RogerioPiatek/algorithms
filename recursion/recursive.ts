function countdown(i: number) {
  console.log(i);
  //base case (ensure we don't enter infinite loop)
  if (i <= 0) {
    return;
  }
  //recursive case
  countdown(i - 1);
}

countdown(20);

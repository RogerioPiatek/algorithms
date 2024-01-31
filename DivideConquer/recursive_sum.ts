//Recursive sum algorithm, instead of loop

const sum = (arr: number[]): number => {
  if (arr.length === 0 || arr.length === 1) {
    return arr[0];
  }
  return arr.shift()! + sum(arr);
};

const array: number[] = [2, 4, 6];

console.log(sum(array));

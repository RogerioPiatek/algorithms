//Recursive Algorithm to get the number of items of a list

const countList = <T>(list: T[]): number => {
  if (list.length === 0) return 0;
  return 1 + countList(list.slice(1));
};

const list: string[] = ["ab", "cd", "fg"];
const numbersList: number[] = [1, 2, 3, 4];

console.log(countList(list));
console.log(countList(numbersList));

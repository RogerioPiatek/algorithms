//Algorithm to find the maximum number in a list, recursively

const max = (list: number[]): number => {
  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }
  let sub_max = max(list.slice(1));
  return list[0] > sub_max ? list[0] : sub_max;
};

const numArray = [1, 2, 4, 10000, 10, 200];

console.log(max(numArray));

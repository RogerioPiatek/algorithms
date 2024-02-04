//Algorithm to sort an array, one of the most efficient.
//Worst case: O(n²) - If array is almost/sorted and we check every element because Pivot == 0
//Average case: O(n log n) - We can try to achieve this by selecting a pivot in the middle

const quickSort = (array: number[]): number[] => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];

  let less = array.slice(1).filter((i) => i <= pivot);
  let greater = array.slice(1).filter((i) => i >= pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

let array1: number[] = [20, 50, 30, 45, 12, 11];

console.log(quickSort(array1));

// Function to find the smallest element in an array
const findSmallest = (arr: number[]) => {
  let smallest: number = arr[0];
  let smallest_index: number = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
};

const selectionSort = (arr: number[]) => {
  let newArr = [];
  console.log(arr.length);
  // for (let i = 0; i < arr.length; i++) {
  //for not so effective on this approach, splice modifies the lenght
  while (arr.length > 0) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]); //using 0 here to ensure we get only the one element from the array
  }
  return newArr;
};

const array: number[] = [5, 3, 6, 2, 10];
console.log(selectionSort(array));

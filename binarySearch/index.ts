/*
Binary Search
Takes an sorted array and an item.
*/

function binarySearch(list: number[], item: number) {
  //these keep track of where in the list we search in
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    //while not searched the entire list
    let mid = Math.floor((low + high) / 2); //get the mid of the list
    let guess = list[mid]; //set our guess
    if (guess === item) {
      //compares if our guess is what we want
      return mid; //returns if true
    }
    //slices our list in half in case of guess > or < than item
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

//array needs to be sorted
const myList: number[] = [1, 10, 20, 200, 1000];

console.log(binarySearch(myList, 200));
console.log(binarySearch(myList, 1));
console.log(binarySearch(myList, 1000));

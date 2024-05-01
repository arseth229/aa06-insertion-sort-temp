// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  const copArr = arr.slice(0, arr.length);
  let sorted = [];
  while (copArr.length) {
    console.log(sorted.join(','));
    let val = copArr.pop();
    sorted.push(val);
    for (let i = sorted.length - 1; i > 0; i--) {
      if (sorted[i] > sorted[i - 1]) {
        i = 0;
      } else {
        [sorted[i - 1], sorted[i]] = [sorted[i], sorted[i - 1]];
      }
    }
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here 
  let pointer = 0;
  while (pointer < arr.length) {
    console.log(arr.join(','))
    for (let i = pointer + 1; i > 0; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      } else {
        i = 0;
      }
    }
    pointer++;
  }
}

module.exports = [insertionSort, insertionSortInPlace];

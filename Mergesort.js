//Buck Harris
//w10088465
/* Sources Used
- Class Lectures / code
- https://www.geeksforgeeks.org/in-place-merge-sort/
- https://www.techiedelight.com/iterative-merge-sort-algorithm-bottom-up/
- Small help/tips from tutor, Connor Thorpen - specifically 
on using while loops instead of for loops for the MergeSort
fuction
*/

function mergesort(list) {
  msort(list, 0, list.length - 1);
  return list;
}
//MergeSort
function msort(list, low, high) {
  var count = 1, middle, Llen = list.length - 1;
  while (count < Llen) {
    while (low < Llen) {
      if (count - 1 + low < Llen)
        middle = count - 1 + low;
      else middle = Llen;
      if (low + 2 * count - 1 < Llen)
        high = low + 2 * count - 1;
      else high = Llen;
      merge(list, low, middle, high);
      low += count * 2
    }
    count *= 2;
    low = 0;
  }
}
//Merge
function merge(list, low, middle, high) {
  var midPlus = middle + 1;
  while (low <= middle && midPlus <= high) {
    if (list[low] <= list[midPlus]) {
      low += 1;
    }
    else {
      var num = list[midPlus], spot = midPlus;
      while (spot != low) {
        list[spot] = list[spot - 1];
        spot -= 1;
      }
      list[low] = num;
      low += 1;
      middle += 1;
      midPlus += 1;
    }
  }
}

// Testing!
const list1 = [1, 5, 78, 3, 7, 5, 2, 90];
console.log(mergesort(list1));
const list2 = [12, -12, 12];
console.log(mergesort(list2));
const list3 = [123, 34, 435, 3425, 23, 5, 3524, 43567, 5364, -2314, -12, -34, 5];
console.log(mergesort(list3));
const list4 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(mergesort(list4));
const list5 = [];
console.log(mergesort(list5));

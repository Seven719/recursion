const mergeSort = (arr) => {
  if (arr.length == 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle, arr.length));

  return merge(left, right);
};

const merge = (left, right) => {
  const sorted = [];

  while (left.length && right.length) {
    left[0] < right[0] ? sorted.push(left.shift()) : sorted.push(right.shift());
  }

  return [...sorted, ...left, ...right];
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));

const fibs = (n) => {
  let arr = [0, 1];

  for (let i = arr.length; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }

  return arr;
};

console.log(fibs(8));

const fibsRecursive = (n, arr = [0, 1]) => {
  if (n == 1) return [0];
  if (n == 2) return arr;
  return fibsRecursive(n - 1, [
    ...arr,
    arr[arr.length - 1] + arr[arr.length - 2],
  ]);
};

console.log(fibsRecursive(8));

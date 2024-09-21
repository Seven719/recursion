const fibs = (n) => {
  let arr = [0, 1];

  for (let i = arr.length; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }

  return arr;
};

console.log(fibs(8));

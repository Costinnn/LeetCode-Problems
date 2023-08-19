const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
const k = 5;

const arrSwap = (arr, position) => {
  const arrPosition = position - 1;
  const store = arr[arrPosition];
  arr[arrPosition] = arr[arr.length - (arrPosition + 1)];
  arr[arr.length - (arrPosition + 1)] = store;

  return arr;
};

console.log(arrSwap(arr, k));

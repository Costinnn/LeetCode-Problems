const duplicate = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
};

const arry = [1, 2, 3];
console.log(duplicate(arry));

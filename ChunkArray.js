const arr = [1, 2, 3, 4, 5];
const size = 2;

const chunk = (arr, size) => {
  const newArr = [];
  let poz1 = 0;
  let poz2 = size;

  while (poz1 <= arr.length) {
    const newArrItem = arr.slice(poz1, poz2);
    if (newArrItem.length > 0) {
      newArr.push(newArrItem);
    }
    poz1 = poz2;
    poz2 += size;

    console.log(poz1, poz2);
  }

  return newArr;
};

console.log(chunk(arr, size));

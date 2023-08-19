let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

let removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    } else {
      k++;
    }
  }

  return { nums, k };
};

console.log(removeElement(nums, val));

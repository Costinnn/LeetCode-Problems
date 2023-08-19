let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    return nums2;
  }
  if (n === 0) {
    return nums1;
  }

  nums1.splice(n, n);

  const newArr = nums1.concat(nums2);

  newArr.sort((a, b) => a - b);

  return newArr;
};

console.log(merge(nums1, m, nums2, n));

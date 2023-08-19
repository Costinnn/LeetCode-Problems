let nums = [2, 2, 1, 1, 1, 1, 1, 2, 2];

let majorityElement = function (nums) {
  nums.sort((a, b) => a - b);

  return nums[Math.round((nums.length - 1) / 2)];
};

console.log(majorityElement(nums));

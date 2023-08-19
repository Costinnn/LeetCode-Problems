const maxProfit = (dayPriceArr) => {
  let profit = 0;

  for (let i = 0; i < dayPriceArr.length - 1; i++) {
    for (let j = i + 1; j < dayPriceArr.length; j++) {
      if (dayPriceArr[j] - dayPriceArr[i] > profit) {
        profit = dayPriceArr[j] - dayPriceArr[i];
      }
    }
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));

// MORE EFFICIENT SOLUtION
// const maxProfit = (prices) => {
//     let left = 0; // Buy
//     let right = 1; // sell
//     let max_profit = 0;
//     while (right < prices.length) {
//       if (prices[left] < prices[right]) {
//         let profit = prices[right] - prices[left]; // our current profit
  
//         max_profit = Math.max(max_profit, profit);
//       } else {
//         left = right;
//       }
//       right++;
//     }
//     return max_profit;
//   };
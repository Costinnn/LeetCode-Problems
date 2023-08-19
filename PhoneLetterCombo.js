// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const digits = "23";
const lettersObj = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
const letterCombinations = (digits) => {
  const stringSize = digits.length;
  if (stringSize === 0) return [];
  if (stringSize === 1) return lettersObj[digits];

  let output = [];
  if (stringSize === 2) {
    lettersObj[digits.charAt(0)].forEach((letter) => {
      lettersObj[digits.charAt(1)].forEach((letter2) => {
        output.push(letter + letter2);
      });
    });
  }
  if (stringSize === 3) {
    lettersObj[digits.charAt(0)].forEach((letter) => {
      lettersObj[digits.charAt(1)].forEach((letter2) => {
        lettersObj[digits.charAt(2)].forEach((letter3) => {
          output.push(letter + letter2 + letter3);
        });
      });
    });
  }
  if (stringSize === 4) {
    lettersObj[digits.charAt(0)].forEach((letter) => {
      lettersObj[digits.charAt(1)].forEach((letter2) => {
        lettersObj[digits.charAt(2)].forEach((letter3) => {
          lettersObj[digits.charAt(3)].forEach((letter4) => {
            output.push(letter + letter2 + letter3 + letter4);
          });
        });
      });
    });
  }

  return output;
};

console.log(letterCombinations("2345"));
console.log(digits.slice(0, 1));

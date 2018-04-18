const numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};

const numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};

const tensToEnglish = number => {
  if (number >= 1 && number <= 19) return numbersToWords[number];
  let englishNumber = "";
  let factor = 1;
  let built = 0;
  while (number) {
    if (number >= 10 && number <= 19) {
      return (englishNumber = numbersToWords[number]);
    } else {
      built = number % 10 * factor;
      built === 0
        ? englishNumber
        : (englishNumber = numbersToWords[built] + "-" + englishNumber);
    }
    number = Math.floor(number / 10);
    factor *= 10;
  }
  englishNumber = englishNumber.slice(0, -1);
  return englishNumber.trim();
};

const hundredsToEnglish = number => {
  if (number <= 99) return tensToEnglish(number);
  let englishNumber = "";
  let tens = number % 100;
  let hundreds = Math.floor(number / 100);
  englishNumber =
    numbersToWords[hundreds] + " " + "hundred" + " " + tensToEnglish(tens);
  return englishNumber.trim();
};

const numberToEnglish = number => {
  if (number === 0) return numbersToWords[number];
  if (number <= 19) return tensToEnglish(number);
  if (number <= 999) return hundredsToEnglish(number);
  if (numbersToPlace[number]) return "one" + " " + numbersToPlace[number];
  const storage = [];
  let englishNumber = "";
  let factor = 1;
  while (number) {
    storage.unshift(number % 1000);
    number = Math.floor(number / 1000);
    !!number ? (factor *= 1000) : factor;
  }
  for (let i = 0; i < storage.length; i++) {
    let current = storage[i];
    englishNumber += " " + hundredsToEnglish(current);
    if (factor !== 1) englishNumber += " " + numbersToPlace[factor];
    factor /= 1000;
  }
  return englishNumber.trim();
};

export default numberToEnglish;

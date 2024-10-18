var areNumbersAscending = function(s) {
  let max = -Infinity;
  let numbers = {
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true,
      '5': true,
      '6': true,
      '7': true,
      '8': true,
      '9': true,
  }
  for (let i = 0; i < s.length; i++) {
      let currentNumber = '';
      while (numbers[s[i]]) {
          currentNumber += s[i];
          i++;
      }
      if (currentNumber.length) {
          if (Number(currentNumber) > max) {
              max = Number(currentNumber);
          } else {
              return false;
          }
      }
  }
  return true;
};
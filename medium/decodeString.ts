function decodeString(s: string): string {
  let solution: (string | number)[] = [];
  let multiplier = '';
  let numbers = /^[0-9]+$/
  for (let i = 0; i < s.length; i++) {
      if (s[i].match(numbers)) {
          multiplier += s[i];
      } else if (s[i] === '[') {
          solution.push(Number(multiplier));
          multiplier = '';
      } else if (s[i] === ']') {
          let currentString = '';
          while (solution.length - 1 >= 0) {
              let character = solution.pop();
              if (typeof character === 'number') {
                  let currentMultiplier = character;
                  currentString = currentString.repeat(character)
                  solution.push(currentString)
                  break;
              } else {
                  currentString = character + currentString
              }
          }
      } else {
          solution.push(s[i])
      }
  }
  return solution.join('')
};
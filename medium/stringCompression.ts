/*
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.
*/

function compress(chars: string[]): number {
  let character = chars[0]
  let index = 0;
  let counter = 1;
  for (let i = 1; i < chars.length; i++) {
    if (character === chars[i]) {
      counter++;
      if (i + 1 === chars.length) {
        let numberCharacters = counter.toString().split('')
        chars.splice(index + 1, i - index, ...numberCharacters)
      }
    } else {
      if (counter > 1) {
        let numberCharacters = counter.toString().split('')
        chars.splice(index + 1, i - index - 1, ...numberCharacters)
        i = index + 2;
      } else {
        i = index + 1;
      }
      index = i;
      character = chars[i];
      counter = 1;
    }
  }
  return chars.length;
};
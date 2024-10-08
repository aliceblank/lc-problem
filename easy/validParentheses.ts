/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
function isValid(s: string): boolean {
  let converters = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  }
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[0] === converters[s[i]] && converters[s[i]] !== undefined) {
      stack.shift()
    } else {
      stack.unshift(s[i])
    }
  }
  return (!stack.length);
};
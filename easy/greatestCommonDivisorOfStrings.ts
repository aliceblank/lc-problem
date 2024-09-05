/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/
function gcdOfStrings(str1: string, str2: string): string {
  let solution = '';
  let shortString = str1.length > str2.length ? str2 : str1;
  let longString = str1.length > str2.length ? str1 : str2;
  for (let i = shortString.length; i > 0; i--) {
    let tester = '';
    let shortTester = '';
    let divisor = shortString.slice(0, i);
    while (shortTester.length <= shortString.length) {
      shortTester += divisor;
      if (shortTester === shortString) {
        while (tester.length <= longString.length && !solution.length) {
          tester += divisor;
          if (tester === longString && divisor.length > solution.length) {
            solution = divisor;
          }
        }
      }
    }
  }
  return solution;
};
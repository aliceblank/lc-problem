function isPalindrome(s: string): boolean {
  const regex = /[^a-zA-Z0-9]/g
  return s.toLowerCase().replace(regex, '').split('').reverse().join('') ===
    s.toLowerCase().replace(regex, '');
};
function canConstruct(ransomNote: string, magazine: string): boolean {
  let splitRansomNote = ransomNote.split('')
  let splitMagazine = magazine.split('')
  let flag = true;
  splitRansomNote.forEach((letter) => {
    if (splitMagazine.indexOf(letter) !== -1) {
      splitMagazine.splice(splitMagazine.indexOf(letter), 1);
    } else {
      flag = false;
    }
  })
  return flag;
};
function isAnagram(s: string, t: string): boolean {
    let sSorted = s.split('').sort().join('')
    let tSorted = t.split('').sort().join('')
    return tSorted === sSorted;
};
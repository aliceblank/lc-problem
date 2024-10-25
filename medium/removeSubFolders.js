/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  if (!folder.length) {
      return folder;
  }
  folder = folder.sort();
  let output = [folder[0]];
  for (let i = 1; i < folder.length; i++) {
      if (!folder[i].startsWith(output[output.length - 1] + '/')) {
          output.push(folder[i]);
      }
  }
  return output;
};
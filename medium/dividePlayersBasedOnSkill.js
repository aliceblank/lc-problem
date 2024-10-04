/*
You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

The chemistry of a team is equal to the product of the skills of the players on that team.

Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.
*/
/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  skill.sort((a, b) => a - b);
  let teams = []
  let totalSkill = skill[0] + skill[skill.length - 1];
  let chemistry = 0;
  for (let i = 0; i < skill.length / 2; i++) {
    if (totalSkill === skill[i] + skill[skill.length - 1 - i]) {
      teams.push([skill[i], skill[skill.length - 1 - i]])
      chemistry += skill[i] * skill[skill.length - 1 - i]
    } else {
      return -1;
    }
  }
  return chemistry;
};
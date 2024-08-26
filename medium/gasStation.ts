/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.
*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let output = -1;
  const moveToNextStation = (currentStation, gasAvailable, startingStation) => {
    if (output !== -1) {
        return;
    }
    if (currentStation === startingStation) {
      output = startingStation;
      return output;
    } else {
      gasAvailable += gas[currentStation]
      let nextStation = currentStation + 1 === gas.length
        ? 0
        : currentStation + 1;
      if (gasAvailable - cost[currentStation] < 0) {
        return;
      } else {
        moveToNextStation(nextStation, gasAvailable - cost[currentStation], startingStation)
      }
    }
  }
  for (let i = gas.length - 1; i >= 0; i--) {
    let startingStation = i;
    let nextStation = i + 1 === gas.length
    ? 0
    : i + 1;
    if (nextStation === i && cost[i] <= gas[i]) {
        output = i;
    }
    if (cost[i] < gas[i]) {
      moveToNextStation(nextStation, gas[i] - cost[i], startingStation)
    }
  }
  return output
};
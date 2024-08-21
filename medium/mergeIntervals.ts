/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

function mergeIntervals(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][1] >= intervals[i+1][0]) {
        if (intervals[i][1] >= intervals[i+1][1]) {
            intervals.splice(i + 1, 1)
            i--
        } else {
            const newInterval = [intervals[i][0], intervals[i+1][1]];
            intervals.splice(i, 2, newInterval);
            i--
        }
      }
    }
    return intervals;
};
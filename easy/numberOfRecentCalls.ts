/*
You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
*/
class RecentCounter {
  constructor() {

  }
  front = 0;
  min = 0
  requests: number[] = [];
  ping(t: number) {
      this.requests.push(t);
      if (!this.min) {
          this.min = t;
      }
      while (t - 3000 > this.min) {
          this.front++;
          this.min = this.requests[this.front];
      }
      return this.requests.length - this.front;
  }
}
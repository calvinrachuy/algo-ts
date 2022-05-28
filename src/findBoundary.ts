/*
An array of boolean values is divided into two sections; the left section consists of all false and the right section consists of all true. Find the boundary of the right section, i.e. the index of the first true element. If there is no true element, return -1.

Input: arr = [false, false, true, true, true]

Output: 2

Explanation: first true's index is 2.
*/

export default function findBoundary(list: boolean[]): number {
  // "target" is list[i] && !list[i - 1]
  
  let left = 0
  let right = list.length - 1
  while (left <= right) {
    const i = Math.floor((left + right) / 2)
    if (list[i] && !list[i - 1]) return i
    if (!list[i]) {
      left = i + 1
    }
    else {
      right = i + 1
    }
  }
  
  return -1
}
export default function binarySearch(list: number[], target: number): number {
  let left = 0
  let right = list.length - 1
  
  while (left <= right) {
    const i = Math.floor((left + right) / 2)
    if (list[i] === target) return i
    
    if (list[i] < target) {
      left = i + 1
    }
    else {
      right = i - 1
    }
  }
  return -1
}
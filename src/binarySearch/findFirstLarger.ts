export default function findFirstLarger(arr: number[], target: number): number {
  let left = 0
  let right = arr.length - 1
  
  while (left <= right) {
      const i = left + Math.floor((right - left) / 2)
      if (arr[i] >= target && (arr[i - 1] === undefined || arr[i - 1] < target)) {
          return i
      }
      
      if (arr[i] < target) left = i + 1
      else right = i - 1
  }
  return 0;
}
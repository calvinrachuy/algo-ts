export default function bsSquareRoot(n: number): number {
  // "target" i * i <= n && (i + 1) * (i + 1) > n
  
  let left = 0
  let right = Math.ceil(n / 2)
  
  while (left <= right) {
    const i = left + Math.floor((right - left) / 2)
    const square = Math.pow(i, 2)
    if (square <= n && Math.pow(i + 1, 2) > n) return i
    
    if (square > n) right = i - 1
    else left = i + 1
  }
  return 0
}
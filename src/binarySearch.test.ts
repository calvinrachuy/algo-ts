import { describe, expect, it } from 'vitest'
import binarySearch from './binarySearch'

describe('binarySearch', () => {
  it('short list', () => {
    expect(binarySearch([1, 2, 3, 4], 1)).toBe(0)
    expect(binarySearch([1, 2, 3, 4], 2)).toBe(1)
    expect(binarySearch([1, 2, 3, 4], 3)).toBe(2)
    expect(binarySearch([1, 2, 3, 4], 4)).toBe(3)
  })
  
  it('length two', () => {
    expect(binarySearch([10, 20], 10)).toBe(0)
    expect(binarySearch([10, 20], 20)).toBe(1)
  })
  
  it('length one', () => {
    expect(binarySearch([89], 89)).toBe(0)
    expect(binarySearch([-5], -5)).toBe(0)
  })
})
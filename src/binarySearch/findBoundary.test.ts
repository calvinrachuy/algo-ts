import findBoundary from './findBoundary'

describe('findBoundary', () => {
  it('finds boundary', () => {
    expect(findBoundary([false, false, false, true, true])).toBe(3)
  })
  
  it('returns -1', () => {
    expect(findBoundary([false])).toBe(-1)
    expect(findBoundary([false, false, false])).toBe(-1)
  })
  
  it('returns 0', () => {
    expect(findBoundary([true])).toBe(0)
    expect(findBoundary([true, true])).toBe(0)
  })
})
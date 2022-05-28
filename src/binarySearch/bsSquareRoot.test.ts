import bsSquareRoot from "./bsSquareRoot"

describe('bsSquareRoot)', () => { 
  it('perfect squares', () => {
    expect(bsSquareRoot(0)).toBe(0)
    expect(bsSquareRoot(1)).toBe(1)
    expect(bsSquareRoot(4)).toBe(2)
    expect(bsSquareRoot(121)).toBe(11)
  })
  
  it('finds closes integer without going over', () => {
    expect(bsSquareRoot(10)).toBe(3)
    expect(bsSquareRoot(3)).toBe(1)
    expect(bsSquareRoot(5)).toBe(2)
    expect(bsSquareRoot(91)).toBe(9)
  })
})
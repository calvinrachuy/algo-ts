import {describe, expect, it} from 'vitest'
import sum from './sum'

describe('sum.ts', () => {
  it('adds', () => expect(sum(1,3)).toBe(4))
})
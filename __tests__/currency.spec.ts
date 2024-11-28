import { describe, expect, it } from 'vitest'

import { formatCurrency } from '~/helpers/currency'

import type { TestCases } from './types'

const testCases: TestCases<number, string> = [
  { name: 'Standard case', input: 100.458, output: '100.46 BYN' },
  { name: 'Zero case', input: 0, output: '0.00 BYN' },
  { name: 'Negative case', input: -50.123, output: '-50.12 BYN' },
  { name: 'Large number', input: 1_234_567.89, output: '1,234,567.89 BYN' },
  { name: 'Small fraction', input: 0.005, output: '0.01 BYN' },
  { name: 'Exact whole number', input: 100, output: '100.00 BYN' },
]

describe('format-currency', () => {
  testCases.forEach(({ name, input, output }) => {
    it(`${name || input} => ${output}`, () => {
      expect(formatCurrency(input)).toBe(output)
    })
  })
})

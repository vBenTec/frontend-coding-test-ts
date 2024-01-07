// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from 'vitest'
import { capitalizeLetter } from '@/utils/stringHelpers'

test('capitalize first letter', () => {
  expect(capitalizeLetter('hello')).toBe('Hello')
})

test('capitalize third letter', () => {
  expect(capitalizeLetter('hello', 3)).toBe('helLo')
})

test('should throw an error if position is out of range', () => {
  expect(() => capitalizeLetter('hello', 10)).toThrow(
    'Position is out of range',
  )
})
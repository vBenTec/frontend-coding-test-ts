// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from 'vitest'
import { getIcon } from '@/utils/getHelpers'

test('get an icon for type element', () => {
  expect(getIcon('water', 'element')).toBe('gi-water-drop')
})

test('get an error if no icon is found', () => {
  expect(() => getIcon('fu', 'element')).toThrow(
    'No icon found check arguments for function invocation',
  )
})
const reverseString = require('../reverse-string')

test('To check wheather reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh')
})

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh')
})

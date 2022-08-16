const isAnagram = require('../anagram')

test('Is Anagram function exists', () => {
  expect(typeof isAnagram).toEqual('function')
})

test(`"Cinema" is an anagram of "iceman"`, () => {
  expect(isAnagram('Cinema', 'iceman')).toBeTruthy()
})

test(`"Hello" is not an anagram of "Aloha"`, () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy()
})

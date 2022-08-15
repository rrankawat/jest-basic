const functions = require('./functions')

// toBe
test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

// not toBe
test('Add 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

// Check for Truthy & Falsy Values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// tobeTruthy matches anything that an if statement treats as true
// tobeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
  expect(functions.checkValue(undefined)).toBeFalsy()
})

// toBeTruthy
// test('Should be truthy', () => {
//   expect(functions.checkValue(2)).toBeTruthy()
// })

// toEqual
test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy',
  })
})

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800
  const load2 = 800
  // expect(load1 + load2).toBeLessThan(1600)
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

// Arrays
test('Admin should be in usernames', () => {
  const usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})

// Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1)
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual('Leanne Graham')
//   })
// })

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})

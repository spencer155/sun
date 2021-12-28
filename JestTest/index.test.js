const {a,b} = require('./index')


test('a-18岁',() => {
  expect(a(18)).toBe('成人')
})
test('b-2000',() => {
  expect(b(2000)).toBe('有钱')
})
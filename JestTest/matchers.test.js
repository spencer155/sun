test('toEqual匹配器',() => {
  const a = {a:1}
  expect(a).toEqual({a:1})
})
test('toBeNull匹配器',() => {
  const a = null
  expect(a).toBeNull()
})
test('toBeUndefined匹配器',() => {
  const a = undefined
  expect(a).toBeUndefined()
})
test('toBeDefined匹配器',() => {
  const a = null
  expect(a).toBeDefined()
})
test('toBeTruthy匹配器',() => {
  const a = 1
  expect(a).toBeTruthy()
})
test('toBeFalsy匹配器',() => {
  const a = 0
  expect(a).toBeFalsy()
})
test('toBeGreaterThan匹配器',() => {
  // >
  const num = 10
  expect(num).toBeGreaterThan(9)
})
test('toBeGreaterThanOrEqual匹配器',() => {
  // >=
  const num = 9
  expect(num).toBeGreaterThanOrEqual(9)
})
test('toBeLessThan匹配器',() => {
  // <
  const num = 8
  expect(num).toBeLessThan(9)
})
test('toBeCloseTo匹配器',() => {
  // 浮点数计算
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3)
})


test('toMatch匹配器', () => {
  const str = 'abs'
  expect(str).toMatch('a')
})
test('toContain匹配器', () => {
  const arr = ['a','v','c']
  expect(arr).toContain('a')
})
test('toContain匹配器', () => {
  const arr = ['a','v','c']
  const data = new Set(arr)
  expect(data).toContain('a')
})


const error = () => {
  throw new error ('报错')
}

test('toThrow匹配器',() => {
  expect(error).toThrow()
})
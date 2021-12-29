import Step from './step'

const step = new Step()

beforeAll(() => {
  console.log('beforeAll:开始')
})

beforeEach(() => {
  console.log('付了300元')
})
test('测试 1号 按脚服务方法', () => {
  step.gongzhu(1)
  step.anjiao()
  console.log(step.fuwu)
  expect(step.fuwu).toEqual('1号走进房间为你按脚')
})
test('测试 2号 按摩服务方法', () => {
  step.gongzhu(2)
  step.anmo()
  console.log(step.fuwu)
  expect(step.fuwu).toEqual('2号走进房间为你按摩')
})

afterEach(() => {
  console.log('完成服务')
})
afterAll(() => {
  console.log('afterAll:结束')
})
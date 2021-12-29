import { fetchData, fetchData2, fetchData3 } from "./fetchData";

test('fetchData测试', (done) => {
  fetchData((data) => {
    expect(data).toEqual({ code: 200, msg: 'B' })
    done()
  })
})
test('fetchData2测试', () => {
  return fetchData2().then(res => {
    expect(res.data).toEqual({ code: 200, msg: 'B' })
  })
})
test('fetchData3测试', () => {
  expect.assertions(1) // 必须执行一次
  return fetchData3().catch(error => {
    expect(error.toString()).toMatch('404')
  })
})
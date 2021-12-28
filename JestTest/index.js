function a(age) {
  return age >= 18 ? '成人' : '未成年人'
}
function b(money) {
  return money >= 1000 ? '有钱' : '没钱'
}

module.exports = {
  a,b
}
export default class Step {
  gongzhu(number) {
    this.user = `${number}号`
  }
  anmo() {
    this.fuwu = `${this.user}走进房间为你按摩`
  }
  anjiao() {
    this.fuwu = `${this.user}走进房间为你按脚`
  }
}
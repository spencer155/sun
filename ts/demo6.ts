class Lady {
  content = 'Hi， 美女'
  say() {
    return this.content
  }
}

class XiaoJieJie extends Lady {
  say() {
    return super.say() + '。你好！'
  }
  sayLove() {
    return 'I love you'
  }
}

const lady = new XiaoJieJie()

console.log(lady.say())
console.log(lady.sayLove())
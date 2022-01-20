class XiaoJieJie {
  constructor(private _age: number) {

  }
  get age() {
    return this._age - 10;
  }
  set age(age: number) {
    this._age = age + 3
  }
}


const xiaohong = new XiaoJieJie(18)
xiaohong.age = 25
console.log(xiaohong.age)
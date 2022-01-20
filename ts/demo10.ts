class Person {
  public readonly _name
  constructor(name: string) {
    this._name = name
  }
}

const person = new Person('11')
// person._name = '2222'
console.log(person._name)
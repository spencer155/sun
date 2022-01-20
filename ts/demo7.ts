class Person {
  protected name:string
  public sayHello() {
    console.log(this.name)
  }
}

class Teacher extends Person {
  public sayBay() {
    console.log(this.name + 'bay')
  }
}

const person = new Person()
// person.name = '123'
person.sayHello()
// console.log(person.name)
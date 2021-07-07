// function Person(name,age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.running = function () {
//   console.log(this.name,this.age,'running')
// }
// const p = new Person('sun',18)
// console.log(p.name,p.age)
// p.running()


class Person {
  constructor(name,age) {
    this.name = name
    this.age = age
  }
  running() {
    console.log(this.name,this.age,'running')
  }
}
const p = new Person('sun',18)
console.log(p.name, p.age)
p.running()

let func = p.running;
// func()

const obj = {
  name:'bin',
  age:40
}

// func.call(obj)

func = func.bind(obj)
func()
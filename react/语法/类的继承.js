// 继承 减少重复的代码

class Person {
  constructor(name,age) {
    this.name = name 
    this.age = age
  }
  running() {
    console.log('running')
  }
}

class Student extends Person {
  constructor(name,age,sno) {
    super(name,age)
    this.sno = sno
  }
}

const stu = new Student('sun',18,1)

console.log(stu)
stu.running()
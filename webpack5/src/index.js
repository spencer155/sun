function readonly(target, key, descriptor) {
  console.log(target, key, descriptor)
  descriptor.writable = false
}

class Circle {
  @readonly PI = 3.14
}

const c1 = new Circle();
c1.PI = 3.15
console.log(c1.PI)
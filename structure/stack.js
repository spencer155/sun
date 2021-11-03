class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return !this.items.length
  }
  size() {
    return this.items.length
  }
}


const stack = new Stack()

function dec2bin(num) {
  while (num > 0) {
    const remainder = num % 2;
    num = parseInt(num / 2)
    stack.push(remainder)
  }

  console.log(stack.items)
  let str = ''
  while (!stack.isEmpty()) {
    str += stack.items.pop()
  }
  
  return str
}
console.log(dec2bin(100))

// stack.push('123')
// stack.push('456')
// stack.push('789')
// stack.push('abc')

// console.log(stack)
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.peek())
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.length = 0;
  }

  append(element) {
    const newNode = new Node(element)
    
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length ++
  }
  insert(position, element) {
    if (position < 0 || position > this.length) return false;

    const newNode = new Node(element)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let prev = null
      while (index ++ < position) {
        prev = current
        current = current.next
      }
      prev.next = newNode
      newNode.next = current
    }

    this.length ++
    return true
  }
  get(position) {
    if (position < 0 || position > this.length - 1) return null;
    let index = 0;
    let current = this.head
    while (index ++ < position) {
      current = current.next
    }
    return current.element
  }
  indexOf(element) {
    let index = 0
    let current = this.head
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  update(position, element) {
    const result = this.removeAt(position)
    this.insert(position, element)
    return result
  }
  removeAt(position) {
    if (position < 0 || position > this.length) return null;

    let current = this.head
    if (position === 0) {
      this.head = current.next
    } else {
      let index = 0
      let previous = null
      while (index ++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length --
    return current.element
  }
  remove(element) {
    const index = this.indexOf(element)
    if (index === -1) return;
    this.removeAt(index)
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
}

const linkedList = new LinkedList()

linkedList.append('aaaa')
linkedList.append('bbbb')
linkedList.append('cccc')
linkedList.append('dddd')

// console.log(linkedList)

// linkedList.insert(0,'sun')
// linkedList.insert(1,'bin')
// console.log(linkedList)

// console.log(linkedList.get(2))
// console.log(linkedList.indexOf('ssss'))
// console.log(linkedList.indexOf('dddd'))

// console.log(linkedList.removeAt(2))
// console.log(linkedList.update(0,'sunbin'))
console.log(linkedList.remove('aaaa'))
console.log(linkedList)
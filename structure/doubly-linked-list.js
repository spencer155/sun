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
    return index
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
}

class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null;
  }
  append(element) {
    const newNode = new DoublyNode(element)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length ++ 
  }
  insert(position, element) {
    if(position < 0 || position > this.length) return false;
    const newNode = new DoublyNode(element);

    if (position === 0) {
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    } else if (position === this.length) {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null

      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.prev = previous
      newNode.next = current
      current.prev = newNode
    }
    this.length++;
    return true
  }
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return null
    let current = this.head
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
    } else if (position === this.length - 1) {
      current = this.tail
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let index = 0
      while (index++ < position) {
        current = current.next
      }
      current.prev.next = current.next;
      current.next.prev = current.prev
    }
    this.length --
    return current.element
  }
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append('1')
doublyLinkedList.append('2')
doublyLinkedList.append('3')
doublyLinkedList.append('4')
doublyLinkedList.insert(2,'a')
doublyLinkedList.insert(0,'b')
console.log(doublyLinkedList.get(0))
console.log(doublyLinkedList.get(5))
// console.log(doublyLinkedList.removeAt(5))
// console.log(doublyLinkedList.removeAt(0))

console.log(doublyLinkedList.update(0,'sun'))
console.log(doublyLinkedList.update(1,'bin'))
console.log(doublyLinkedList)
console.log(doublyLinkedList.remove('bin'))
console.log(doublyLinkedList.remove('sun'))

console.log(doublyLinkedList)
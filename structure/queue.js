class Queue {
  constructor() {
    this.items = []
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    if (this.isEmpty()) return null;
    return this.items[0]
  }
  isEmpty() {
    return !this.items.length
  }
  size() {
    return this.items.length
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority)
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let index = 0; index < this.size(); index++) {
        if (this.items[index].priority > queueElement.priority) {
          this.items.splice(index, 0, queueElement);
          added = true
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
}



function priority() {
  const priorityQueue = new PriorityQueue()
  priorityQueue.enqueue('aaa',90)
  priorityQueue.enqueue('bbb',110)
  priorityQueue.enqueue('ccc',20)
  priorityQueue.enqueue('ddd',10)
  console.log(priorityQueue)
}
priority()

// const queue = new Queue()

// queue.enqueue('123')
// queue.enqueue('456')
// queue.enqueue('789')
// queue.enqueue('abc')

// console.log(queue)
// console.log(queue.dequeue())
// console.log(queue)
// console.log(queue.front())

// function passGame(nameList, num) {
//   const queue = new Queue()
//   nameList.forEach(item => {
//     queue.enqueue(item)
//   });
//   while (queue.size() > 1) {
//     for (let index = 0; index < num-1; index++) {
//       queue.enqueue(queue.dequeue())
//     }
//     queue.dequeue()
//     console.log(queue)
//   }
//   return queue.front()
// }
// console.log(passGame(['sun','bin','chen','li'], 3))

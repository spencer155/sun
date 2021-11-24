class ArrayList {
  constructor() {
    this.array = []
  }
  inset(item) {
    this.array.push(item)
  }
  toString() {
    return this.array.join('-')
  }
  swap(m,n) {
    const temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }
  // 冒泡排序
  bubbleSort() {
    const length = this.array.length
    for (let j = length -1 ; j >= 0 ; j--) {
      for (let i = 0; i < j; i++) {
        if (this.array[i] > this.array[i+1]) {
          this.swap(i, i+1)
        }
      }
    }
  }
  // 选择排序
  selectionSort() {
    const length = this.array.length
    for (let j = 0 ; j < length -1 ; j++) {
      let min = j 
      for (let i = min + 1; i < length; i++) {
        if (this.array[min] > this.array[i]) {
          min = i
        }
      }
      this.swap(min,j)
    }
  }
  // 插入排序
  insertionSort() {
    const length = this.array.length
    for (let i = 1; i < length; i++) {
      const temp = this.array[i]
      let j = i
      while (this.array[j - 1] > temp && j > 0) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }
  // 希尔排序
  shellSort() {
    const length = this.array.length
    let gap = Math.floor(length/2)

    while (gap >= 1) {
      // 以gap作为间隔 进行分组 并进行插入排序
      for (let i = gap; i < length; i++) {
        const temp = this.array[i]
        let j = i
        while (this.array[j-gap] > temp && j > gap -1) {
          this.array[j] = this.array[j - gap]
          j -= gap
        }
        this.array[j] = temp
      }
      gap = Math.floor(gap / 2)
    }
  }
  // 快速排序
  // 获取枢纽
  getMedian(left, right) {
    const center = Math.floor((left + right) / 2)

    if (this.array[left] > this.array[center]) {
      this.swap(left,center)
    }
    if (this.array[center] > this.array[right]) {
      this.swap(center,right)
    }
    if (this.array[left] > this.array[center]) {
      this.swap(left,center)
    }
    this.swap(center, right - 1)
    return this.array[right - 1]
  }
  quickSort() {
    this.quick(0, this.array.length - 1)
  }
  quick(left, right) {
    if (left >= right) return ;
    const pivot = this.getMedian(left, right)
    let i = left
    let j = right -1
    while (true) {
      while (this.array[++i] < pivot) {}
      while (this.array[--j] > pivot) {}
      if (i < j) {
        this.swap(i, j)
      } else {
        break
      }
    }
    if (right - 1 > i) {
      this.swap(i, right - 1)
    }
    this.quick(left, i - 1)
    this.quick(i + 1, right)
  }
}

const list = new ArrayList()

list.inset(58)
list.inset(25)
list.inset(55)
list.inset(56)
list.inset(577)
list.inset(512)
list.inset(2)
list.inset(77)
list.inset(1)
list.inset(777)
list.inset(37)
// console.log(list.toString())
// list.bubbleSort()
// list.selectionSort()
// list.insertionSort()
list.quickSort()
console.log(list.toString())

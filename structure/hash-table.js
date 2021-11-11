const MAX_LOAD_FACTOR = 0.75
const MIN_LOAD_FACTOR = 0.25
class HashTable {
  constructor() {
    this.storage = []
    this.count = 0;
    this.limit = 7
  }
  hashFunc(str, max) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i)
    }
    hashCode = hashCode % max
    return hashCode
  }
  isPrime(num) {
    let temp = Math.ceil(Math.sqrt(num))
    for (let i = 2; i < temp; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }
  getIndex(key) {
    return this.hashFunc(key, this.limit)
  }
  put(key, value) {
    const index = this.getIndex(key)
    let bucket = this.storage[index]
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    let overide = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        overide = true
      }
    }
    if (!overide) {
      bucket.push([key, value])
      this.count++
      if (this.count > this.limit * MAX_LOAD_FACTOR) {
        const newLimit = this.getPrime(this.limit * 2)
        this.resize(newLimit)
      }
    }
  }
  get(key) {
    const index = this.getIndex(key)
    let bucket = this.storage[index]
    if (!bucket) return null
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }
  remove(key) {
    const index = this.getIndex(key)
    let bucket = this.storage[index]
    if (!bucket) return null
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        if (this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
          this.resize(Math.floor(this.limit / 2))
        }
        return tuple[1]
      }
    }
    return null
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  resize(newLimit) {
    const oldStorage = this.storage
    this.limit = newLimit
    this.count = 0
    this.storage = []
    oldStorage.forEach(bucket => {
      if (bucket && bucket.length) {
        for (let i = 0; i < bucket.length; i++) {
          const tuple = bucket[i];
          this.put(tuple[0], tuple[1])
        }
      }
    })
  }
}
const hashTable = new HashTable()
hashTable.put('aaa', '111')
hashTable.put('bbb', '111')
hashTable.put('ccc', '111')
hashTable.put('ddd', '111')
hashTable.put('eee', '111')
hashTable.put('fff', '111')
console.log(hashTable)
class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  insert(value){
    if (value === this.value){
      return;
    }
    const direction = value < this.value ? 'left' : 'right'
    if (this[direction]){
      this[direction].insert(value)
    } else {
      this[direction] = new BinarySearchTree(value)
    }
    this.magnitude++
  }

  contains(value){
    if (this.value === value) {
      return true
    }
    const direction = value < this.value ? 'left' : 'right'
    if (this[direction]){
      return this[direction].contains(value)
    } else {
      return false;
    }
  }

  size(){
    return this.magnitude;
  }

  // contrary to the test,
  // I'm going to ignore parameters
  // and CONSOLE.LOG() instead of the first parameter
  // and do IN-ORDER instead of reading the second parameter
  depthFirstForEach(callback){
    // this // is a BinarySearchTree
    // this.depthFirstForEach() // works
    // this.left // is a BinarySearchTree OR NULL
    // this.left.depthFirstForEach() // also works
    // UNLESS this.left is null!!!

    // traverse left branch
    if (this.left) {
      this.left.depthFirstForEach(callback)
    }

    callback(this.value)

    // traverse right branch
    if (this.right) {
      this.right.depthFirstForEach(callback)
    }
  }

  breadthFirstForEach(){
    const queue = [this] // [] is a queue if
      // you're just using .push() and .shift()

    while (queue.length > 0) {
      const nodeToProcess = queue.shift()
      console.log(nodeToProcess.value)
      // what are all the children?
      // this.left
      queue.push(nodeToProcess.left)
      // this.right
      queue.push(nodeToProcess.right)
    }
  }
}

module.exports = BinarySearchTree

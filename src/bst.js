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

  depthFirstForEach(){
    // CODE FOR DEPTH FIRST FOREACH HERE
  }

  breadthFirstForEach(){
    // CODE FOR BREADTH-FIRST FOREACH HERE
  }
}

module.exports = BinarySearchTree

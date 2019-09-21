//Implement a Queue using two stacks.
class Stack{
    constructor(capacity){
      this._storage = {};
      this._length = 0;
      this._capacity = capacity || Infinity;
    }
    push(value){
      if(this.count() < this._capacity){
        this._storage[this._length] = value;
        this._length++;
        return this.count();
      }else{
        return "Max capacity reached";
      }
    }
    pop(){
      if(this.count() === 0){
        return "Stack is empty.";
      }
      let lastVal = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;
      if(this.count() < 0){
        this._length = 0;
      }
      return lastVal;
    }
    peek(){
      return this._storage[this._length - 1];
    }
    count(){
      return this._length;
    }
  }
  
  
  var myStack = new Stack(3);
  console.log(myStack.push('a'), 'should be 1');
  console.log(myStack.push('b'), 'should be 2');
  console.log(myStack.push('c'), 'should be 3');
  console.log(myStack.push('d'), 'should be Max capacity reached');
  console.log(myStack.pop(), 'should be c');
  console.log(myStack.count(), 'should be 2');
  console.log(myStack.peek(), 'should be b');
  console.log(myStack.count(), 'should be 2');
  console.log('**************************************');
  
  class Queue{
    constructor(capacity){
      this._stackIn = new Stack(capacity);
      this._stackOut = new Stack(capacity);
    }
    enqueue(value){
      if(this._stackIn.count() < this._stackIn._capacity){
        this._stackIn.push(value);
        return this._stackIn.count();
      }else{
        return "Max capacity reached";
      }
    }
    dequeue(){
      if(this._stackOut.count() === 0){
        this.transferStack();
      }
      return this._stackOut.pop();
    }
    count(){
      return this._stackIn._length + this._stackOut._length;
    }
    peek(){
      return this._stackOut.peek();
    }
    transferStack(){
      while(this._stackIn.count()>0){
        this._stackOut.push(this._stackIn.pop());
      }
    }
  }
    var myQueue_TwoStacks = new Queue(3);
    console.log(myQueue_TwoStacks.enqueue('a'), 'should be 1');
    console.log(myQueue_TwoStacks.enqueue('b'), 'should be 2');
    console.log(myQueue_TwoStacks.enqueue('c'), 'should be 3');
    console.log(myQueue_TwoStacks.enqueue('d'), 'Max capacity reached');
    console.log(myQueue_TwoStacks.dequeue(), 'should be a');
    console.log(myQueue_TwoStacks.count(), 'should be 3');
    console.log(myQueue_TwoStacks.peek(), 'should be b');
    console.log(myQueue_TwoStacks.count(), 'should be 3');
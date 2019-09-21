class Stack{
    constructor(capacity){
      this._storage = {};
      this._length = 0;
      this._capacity = capacity || Infinity;
    }
    _push(value){
      if(this._length < this._capacity){
        this._storage[this._length] = value;
        this._length++;
        return this._length;
      }else{
        return "Max capacity reached";
      }
    }
    _pop(){
      if(this._length === 0){
        return "Stack empty,add new values";
      }
      let lastVal = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;
      if(this._length < 0){
        this._length = 0;
      }
      return lastVal;
    }
    _count(){
      return this._length;
    }
    _peek(){
       return this._storage[this._length - 1]; 
    }
  }
  
  var myStack = new Stack(3);
  console.log(myStack._push('a'), 'should be 1');
  console.log(myStack._push('b'), 'should be 2');
  console.log(myStack._push('c'), 'should be 3');
  console.log(myStack._push('d'), 'stack Max capacity reached');
  console.log(myStack._pop(), 'should be c');
  console.log(myStack._count(), 'should be 2');
  console.log(myStack._peek(), 'should be b');
  console.log(myStack._count(), 'should be 2');
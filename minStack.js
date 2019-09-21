class Stack{
    constructor(capacity){
      this._storage = {};
      this._capacity = capacity || Infinity;
      this._length = 0;
    }
    _push(value){
      if(this._count()<this._capacity){
        this._storage[this._length] = value;
        this._length++;
        return this._length;
      }else{
        return "should be Max capacity reached."
      }
    }
    _pop(){
      if(this._length === 0){
        return "Insert stack elements before popping."
      }
      let lastVal = this._storage[this._length - 1];
      delete this._storage[this._length-1];
      this._length--;
      if(this._length < 0){
        this._length = 0;
      }
      return lastVal;
    }
    _peek(){
      return this._storage[this._length - 1];
    }
    _count(){
      return this._length;
    }
  }
  var myStack = new Stack(3);
  console.log(myStack._push('a'), 'should be 1');
  console.log(myStack._push('b'), 'should be 2');
  console.log(myStack._push('c'), 'should be 3');
  console.log(myStack._push('d'), 'should be Max capacity reached');
  console.log(myStack._pop(), 'should be c');
  console.log(myStack._count(), 'should be 2');
  console.log(myStack._peek(), 'should be b');
  console.log(myStack._count(), 'should be 2');
  console.log('**************************************');
  
  class minStack{
    constructor(capacity){
      this._length = 0;
      this._storage = {};
      this._capacity = capacity || [];
      this._min = new Stack();
    }
    _push(value){
      if(this._length < this._capacity){
        if(this._min._peek()<value){
          this._min._push(this._min._peek());
        }else{
          this._min._push(value);
        }
        this._storage[this._length] = value;
        this._length++;
        return this._length;
      }else{
        return "Stack size exceeded";
      }
    }
    _pop(){
       if(this._length === 0){
        return "Insert stack elements before popping."
      }
      this._min._pop();
      let lastVal = this._storage[this._length - 1];
      delete this._storage[this._length-1];
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
    _minimum(){
      return this._min._peek();
    }
  }
  
  var minObjStack = new minStack(5);
  console.log(minObjStack._push(3), 'should be 1');
  console.log(minObjStack._push(23), 'should be 2');
  console.log(minObjStack._minimum(), 'is the minimum value');
  console.log(minObjStack._push(2), 'should be 3');
  console.log(minObjStack._minimum(), 'is the minimum value');
  console.log(minObjStack._push(7), 'should be 4');
  console.log(minObjStack._pop(), 'should be 7');
  console.log(minObjStack._count(), 'should be 3');
  console.log(minObjStack._peek(), 'should be 2');
  console.log(minObjStack._count(), 'should be 3');
  console.log(minObjStack._minimum(), 'is the minimum value');
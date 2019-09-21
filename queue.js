class Queue{
    constructor(capacity){
      this._length = 0;
      this._headIndex = 0;
      this._storage = {};
      this._capacity = capacity || Infinity;
    }
    _enqueue(value){
      if(this._length < this._capacity){
        let lastIndex = this._length + this._headIndex;
        this._storage[lastIndex] = value;
        this._length++;
        return this._length;
      }else{
        return "Max size Exceeded.";
      }
    }
    _dequeue(){
      if(this._count() === 0){
        return "Queue is empty.Please add values first";
      }
      let firstVal = this._storage[this._headIndex];
      delete this._storage[this._headIndex];
      this._length--;
      if(this._length < 0){
        this._length = 0;
      }
      return firstVal;
    }
    _count(){
      return this._length;
    }
    _peek(){
      return this._storage[this._headIndex];
    }
  }
  
  let myQ = new Queue(5);
  myQ._enqueue('zero');
  myQ._enqueue('one');
  myQ._enqueue('two');
  myQ._enqueue('three');
  console.log(myQ);
  console.log(myQ._dequeue());
  console.log(myQ._peek());
  console.log(myQ);
  console.log(myQ._count(),"Elements are present.");
  
  
class LinkedList{
    constructor(value){
      this._head = {value,next: null};
      this._tail = this._head;
    }
    _isEmpty(){
      return this._length === 0;
    }
    _isHead(value){
      return this._head.value === value;
    }
    _isTail(value){
      return this._tail.value === value;
    }
    _insert(value){
      let node = {value,next: null};
      this._tail.next = node;
      this._tail = node;
    }
    _removeHead(){
      let currentHead = this._head;
      this._head = this._head.next;
      return currentHead;
    }
    _removeTail(){
      let currentNode = this._head;
      let previousNode = null;
      while(currentNode !== this._tail){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = null;
      this._tail = previousNode;
      return currentNode;
    }
    _remove(value){
      let currentNode = this._head;
      let previousNode = null;
      if(this._isEmpty()){
        return undefined;
      }
      while(currentNode){
        if(currentNode.value === value){
          break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if(currentNode === null){
        return undefined;
      }
      if(currentNode === this._head){
        this._head = this._head.next;
      }else{
        previousNode.next = currentNode.next;
      }
      this._length--;
      return currentNode;
    }
    _retrieve(value){
      let currentNode = this._head;
      while(currentNode !== this._tail){
        if(currentNode.value === value){
          return currentNode;
        }else{
          currentNode = currentNode.next;
        }
      }
    }
    _contains(value){
      let currentNode = this._head;
      while(currentNode !== this._tail){
        if(currentNode.value === value){
          return true;
        }else{
          currentNode = currentNode.next;
        }
      }
    }
  }
  const myList = new LinkedList(10);
  myList._insert(1);
  myList._insert(2);
  myList._insert(3);
  myList._insert(4);
  myList._insert(5);
  myList._insert(6);
  console.log(myList);
  console.log(myList._isEmpty());
  console.log(myList._isHead(0));
  console.log(myList._isTail(6));
  console.log(myList._removeHead());
  console.log(myList._removeTail());
  console.log(myList._remove(2));
  console.log(myList._contains(3));
  console.log(myList._retrieve(4));
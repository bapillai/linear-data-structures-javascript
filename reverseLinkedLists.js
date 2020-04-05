class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  
    addMany(values) {
      let current = this;
      while (current.next !== null) {
        current = current.next;
      }
      for (const value of values) {
        current.next = new LinkedList(value);
        current = current.next;
      }
      return this;
    }
  
    getNodesInArray() {
      const nodes = [];
      let current = this;
      while (current !== null) {
        nodes.push(current.value);
        current = current.next;
      }
      return nodes;
    }
  }
  
  function reverseLinkedList(head){
   let p1 = null;
   let p2 = head;
   while(p2 !== null){
     let p3 = p2.next;
     p2.next = p1;
     p1 =p2;
     p2 =p3;
   }
   return p1;
  }
  
  const test = new LinkedList(0).addMany([1, 2, 3]);
  console.log(reverseLinkedList(test));
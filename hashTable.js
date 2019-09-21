/*
HASH TABLE
Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.
*** Note:
ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).
Hash tables are also referred to as hash mapse or dictionaries.
*** Operations:
myMap.set(key, value)
=> myMap object
Store the key-value pair in the storage array.
If the key already exists, replace stored value with new value.
Use the hashing function to map the key to an integer and store the value at the corresponding index.
Account for the possibility of collisions.
myMap.get(key)
=> value associated with key, or undefined if none
myMap.has(key)
=> true/false depending on if a value has been associated with the key
myMap.delete(key)
=> true if a value was associated with the key
=> false if a value was never associated with the key
Remove any value associated to the key
myMap.count()
=> integer number of key/value pairs in hash table
myMap.forEach(callbackFn)
=> no returned value
Invokes callback function once for each key-value pair in the hash table
*** Exercises:
Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs
Implement a hash table with a binary search tree.
*/

// Simple hashing function to use in your implementation
class HashTable{
    constructor(value){
      this._count = 0;
      this._tableSize = value;
      this._storage = [];
    }
    hash(str,n){
      let hashVal = 0;
      for(let i=0;i<str.length;i++){
        hashVal = str.charCodeAt(i) * (i+1);
      }
      return hashVal % n;
    }
    forEach(callback){
      this._storage.forEach(function(bucket){
        bucket = bucket || [];
        bucket.forEach(function(item){
          callback(item);
        });
      });
    }
    resize(newSize){
      let oldStorage = this._storage;
      this._storage = [];
      this._count = 0;
      this._tableSize = newSize;
      let that = this;
      oldStorage.forEach(function(bucket){
        bucket = bucket || [];
        bucket.forEach(function(item){
          let key = Object.keys(item)[0];
          that.insert(key,item[key]);
        });
      });
    }
    find(key){
      let index = this.hash(key,this._tableSize);
      this._storage[index] = this._storage[index] || [];
      let bucket = this._storage[index];
      let match,matchIndex;
      bucket.forEach(function(item,index){
        if(item.hasOwnProperty(key)){
          match = item;
          matchIndex = index;
        }
      });
      return {
        match: match,
        matchIndex: matchIndex,
        bucket: bucket
      };
    }
    count(){
      return this._count;
    }
    contains(key){
      return !!this.find(key).match;
    }
    retrieve(key){
      let match = this.find(key).match;
      return match && match[key];
    }
    insert(key,value){
      let match = this.find(key).match;
      if(match){
        match[key] = value;
      }else{
        let newItem = {};
        newItem[key] = value;
        let bucket = this.find(key).bucket;
        bucket.push(newItem);
        this._count++;
        if(this._count > 0.75 * this._tableSize){
          this.resize(2 * this._tableSize);
        }
      }
      return this;
    }
    remove(key){
      let match = this.find(key).match;
      if(match){
        let matchIndex = this.find(key).matchIndex;
        let bucket = this.find(key).bucket;
        bucket.splice(matchIndex,1);
        this._count--;
        if(this._count < .25 * this._tableSize){
          this.resize(0.5 * this._tableSize);
        }
      }
      return !!match;
    }
  }
  
  
  var myMap = new HashTable(10);
  console.log(myMap.insert('key', 'value'), 'should be HT object');
  console.log(myMap.retrieve('key'), 'should be value');
  console.log(myMap.contains('key'), 'should be true');
  console.log(myMap.contains('foo'), 'should be false');
  console.log(myMap.remove('key'), 'should be true');
  console.log(myMap.remove('foo'), 'should be false');
  console.log(myMap, 'should have no elements');
  console.log(myMap.count(), 'should be 0');
  console.log('count', myMap._count, 'should be 0');
  console.log('size', myMap._tableSize, 'should be 5');
  myMap.insert('foo', 'bar');
  myMap.insert('fooAgain', 'barAgain');
  myMap.insert('a', 1);
  myMap.insert('b', 2);
  myMap.forEach(console.log);
  console.log('count', myMap._count, 'should be 4');
  console.log('size', myMap._tableSize, 'should be 10 (doubled)');
  myMap.remove('a');
  console.log('count', myMap._count);
  console.log('size', myMap._tableSize);
  myMap.remove('b');
  console.log('count', myMap._count);
  console.log('size', myMap._tableSize, 'should be 5 (halved)');
var obj = {name:'hagai'};

//readonly
Object.defineProperty(obj, 'birth', {
  enumerable:true,
  configurable: false,
  writable:true, //false makes it readonly
  value:'27-8-1999'
});

console.log(obj);
obj.birth = 'not born';
console.log(obj);

//get and set
Object.defineProperty(obj, 'val', {
  enumerable:true,
  configurable: false,
  get: function(){
    return this.name;
  },
  set:function(data){
    this.name = data;
  }
});

console.log(obj);
obj.hi = "";
obj.val = 'ringo';
console.log(obj);

//get
Object.defineProperty(obj, 'length', {
  enumerable:true, //if false it won't show the new property length
  configurable: false,
  get:function(){
    var count = 0;
    for(key in this){
     count++;
    }
      return count;
    }
});

console.log(obj);
console.log(obj.length); //num of keys in obj

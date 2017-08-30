//dot & bracket notation
var obj = {};
obj.x = "dot notation";
obj["xy z"] = "bracket notation";
obj["xy" + " z"]; //xyz


//define property///
Object.defineProperty(obj, "name", {
  //descriptor
  //by default writable is false and confugurablity is false
  value: "orev"
});

Object.defineProperty(obj, 'x', {
  //descriptor
  //by default writable is false and confugurablity is false
  enumerable:false; //make it not appear and it's writeable
});

obj; //won't display x

//it's unrewriteable
obj.name; //orev
obj.name = "orvanit";
obj.name;//orev

obj; //won't display the new property we've made

//writable properties
Object.defineProperty(obj, "lname", {
  //descriptor
  //by default writeable is false and confugurablity is false
  value: "w3",
  writable:true
});

obj.lname; //w3
obj.lname = "bar"; //bar
obj.lname;//bar


//deletes items from object//
delete obj.x;
delete obj["xy z"];
var arr = [0,3,4];

//checks if something is an array
Array.isArray(obj);
Array.isArray(arr);

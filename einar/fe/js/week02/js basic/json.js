var o = {
  a:1,
  b:"bbb",
  c: true,
  d:[3,4,5],
  e: function(){
    console.log(e);
  },
  f: {a:1, b:2}
}

//convert object to string
var str = JSON.stringify(o);
console.log(str); //string

//convert string to object
var parse = JSON.parse(str);
console.log(parse);
console.log(parse.d);//[3,4,5]

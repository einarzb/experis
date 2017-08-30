var array1 = [7,19,48,5];
var array2 = [3,3,5,3,8,56,4]; //11
var def = 7;

function zip(array1,array2){
  addArrs(array1,array2,def);
  return zip;
}

var addArrs = function (array1,array2, def) {
  var out = [];
  var longer = [];
  var smaller = [];

//check which array is longer =>
  if (array1.length > array2.length) {
     longer = array1;
     smaller = array2;
  } else {
     longer = array2;
     smaller = array1;
  }

//run on the longer array
  for (var i = 0; i < longer.length; ++i) {
      if(array1[i] === undefined || array2[i] === undefined) {
        out[i] = longer[i] + def;
      }else{
        out[i] = array1[i]+ array2[i];
      }
  }
  console.log(out);
  return out;
}

zip(array1,array2,addArrs,def); //[10,22,53,16]

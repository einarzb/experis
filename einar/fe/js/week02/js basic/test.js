
function zip(){
  var array1 = [7,19,48,5];
  var array2 = [3,3,5,3,8,56,4]; //11
  var out = [];
  var def = 5;
  var longer = [];

  addArrs(array1,array2,out,def);
}

var addArrs = function (array1,array2,out,def) {
  console.log("before " + array1);
  console.log("before " + array2);

//check which array is longer =>
  if (array1.length > array2.length) {
    // console.log("arr1 longer");
     longer = array1.length;
  } else {
    // console.log("arr2 longer");
     longer = array2.length
  }

//run on the longer array
  for (var i = 0; i < longer; ++i) {
    if (array1[i] || array2[i] == undefined) {
          out[i] = def;
    } else {
      out += array1[i] + array2[i];
    }
  }

  console.log(array1);
  console.log(array2);

  console.log(out);
  return out;
}

zip(); //[10,22,53,16]

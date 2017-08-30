
/*
- test name: math
- describe: describes ALL tests in test suite
-it: function for one test
if we have multiple tests we need to kill each test environment before I run 2nd test
and create new world of testing - we do it with brefoeEach

*/
//you put all tests in spec folder
//suite of tests for function
describe("math", function(){
  var math = require('../../src/math.js');

  //one test
  it("should be able to add 2 numbers correctly", function(){
    var sum = math.addNums(3,4) // cb function
    expect(sum).toEqual(7); //it works with matcher
  });
  //second test
  it("should be able to add 2 numbers (minus and plus) correctly", function(){
    var sum = math.addNums(13,-4) // cb function
    expect(sum).toEqual(9); //it works with matcher
  });
});




//you need to use 3 lib files
// then src files
//then spec files

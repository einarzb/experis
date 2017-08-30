function funcA(){
  console.log("im A");
}

funcA();

//function is also an object
//not just a function
funcA.prop1 = "hello A";

funcA;

//'prop1' in funcA ==> true


//delete property
delete funcA.prop1

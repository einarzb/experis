function run(input) {
//initialize vars
  var i = 0;
  var pointer = 0;
  var asciiArr = [];
  var pointersArr = [];
  var output = "";

//run through the string
  while (input[i]) {
    switch (input[i]) {
      case ">":
        pointer++;
        break;
      case "<":
        pointer--;
        break;
      case "+":
          asciiArr[pointer] = asciiArr[pointer]? asciiArr[pointer] + 1 : 1;
        break;
      case "-":
          asciiArr[pointer] = asciiArr[pointer]? asciiArr[pointer] - 1 : -1;
        break;
      case ".":
        //use method for ascii translation
        output += String.fromCharCode(asciiArr[pointer]);
        break;
        //determine start of loop
      case "[":
        pointersArr[pointersArr.length] = i;
        break;
      case "]":
        if (asciiArr[pointer]) {
          i = pointersArr[pointersArr.length - 1];
        } else { // removing from end
          pointersArr.length--; // "removing" from end
        }
          break;
    }
    ++i;
  }
  return output;
}


var str = run("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.");

console.log(str);

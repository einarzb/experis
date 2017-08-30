//everyone nested in functions - knows every other function in their closure
var BF = function(){
  var memory = []; //local for bf and global for function memortinit

  //initiaize memory with 1000 spaces of 0
  function memoryInit(memory){
    for (var i = 0; i < 1000; i++) {
      memory[i] = 0;
      return;
    }
  }

  //compile
  function compileBF (programStr) {
  var tempProg = []; //local var that holds the array
  var newS = "";
  var loop = []; //loop stack
  var next = 0; //pointer of string array

  var data = []; //array of memort
  var pointer = 0; //pointer of memory(pointer)

  return tempProg;
  }

  //run
   function runBF(compiledProg){
     //an object of different methods
     var operation = {
             //key:value(expression)
             '>' : function(){
               ++pointer;
             },
             '<' : function(){
               --pointer;
             },
             '+' : function(){
               data[pointer]+=1;
             },
             '-' : function(){
               data[pointer]-=1;
             },
             '.':function (){
               newS += String.fromCharCode(data[pointer]);
             },
             //Add new items to the beginning of an array
             '[' : function(){
               //if index == 0 you skip till the end of the closing bracket ]
               // if(falsy) you automaticly skip to the else part
               if(data[pointer] == 0){
                 loop.unshift(next - 1)
               }
             },
             //Remove the first item of an array
             ']' : function(){
               if(data[pointer]){
                 next = loop.shift(0)
               }
             }
          }
      //end of object
     memoryInit(memory);
  }
    //an object
    var funcs = {};
    funcs.compileBF = compileBF;
    funcs.runBF = runBF;
    return funcs;
  }

var myProg = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."

//the user compiled string
var myBF = BF(); //you call her and ger in returns gets an object
var myBin = myBF.compileBF(myProg); //compile
myBF.runBF(myBin);

function run(str){
  console.log("im einar");
  //initialize
  var loop = []; //loop stack
  var next = 0; //pointer of string array

  var data = []; //array of memort
  var pointer = 0; //pointer of memory(pointer)

  var newS = "";
  // var command = str[i];

// invoke the function by calling the object property

//operation[command])() // the value of this is the operator's function

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
//as long as I run through the string
while(next < str.length){
  operation[str[next++]]();
}

return newS;
}

//invoke
var str = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
var newArr = run(str);
console.log(newArr);

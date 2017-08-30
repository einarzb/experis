function createBf(){

      //create an array filled with 1000 spaces and will hold the ascii letters
      var arrMem = Array(1000).fill(0);
      var indexMemory = 0;

      //future output
      var textToPrint= "";

      //brackets [] loop part
      var arrLoop = [];
      var  indexBf = 0;

      function getLoopIndex(bfStr){
        //array for [] symbols
          var stackLoop = [];
          //run through the string
          for(var i = 0 ; i < bfStr.length ; i ++ ){
            //push to loop array if theres an [ symbol (LIFO)
              if(bfStr[i]==='['){
                stackLoop.push(i);
              }
            // if theres an ] closing bracket - remove the last one from the array (LIFO)
              else if(bfStr[i]===']'){
                var startLoop = stackLoop.pop();
                arrLoop[i] = startLoop;
                arrLoop[startLoop] = i;
              }
          }
      }

      function compile(bfStr){
        //invoke this function first
        getLoopIndex(bfStr);

        var compile =[];

        //object holding all methods

        var convert = {

                   '+': function () {
                     arrMem[indexMemory]++;
                   },

                   '-': function () {
                     arrMem[indexMemory]--;
                   },

                   '>':function () {
                    indexMemory++;
                   },

                   '<':function () {
                    indexMemory--;
                   },

                   '.':function () {
                    textToPrint+=String.fromCharCode(arrMem[indexMemory]);
                   },

                   '[':function () {
                       if(arrMem[indexMemory] === 0){
                         indexBf = arrLoop[indexBf]
                       }
                   },

                   ']':function () {
                        if(!(arrMem[indexMemory] === 0))
                        indexBf = arrLoop[indexBf];
                   }
               }//end object

           for(var i = 0 ; i < bfStr.length ; i ++){
              /*running through the string and assigning the new array current index
               with the object's function in position of certain symbol
              */
                   compile[i] = convert[bfStr[i]]; //{'+':[function: +]}
        }
           return compile; //return array full of ref functions
      }


      function run(program){
        //run through the compiled array length and invoke the run functions
        //as long as the array runs
        for(indexBf = 0 ; indexBf < program.length ; indexBf ++){
            //go through the compiled array & executes ehatever function by
            //it's index location ***array[function in i place]()****
            program[indexBf]();
            //program is an array full of functions
        }
        console.log(textToPrint);
      }

      //an object of the createBf main function!
      var bfobject = {};
      //2 functions wrapped in the funct' object
      bfobject.compileBf = compile;
      bfobject.runBf = run;

      return bfobject;
    }

function tester (){
    //object with reference to compile & run functions
    var bfobject = createBf();

    console.log(bfobject);
    //var that holds ref that invokes object function of compile
    var compile = bfobject.compileBf("++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.");
    //object function that runs on the compiled array
    bfobject.runBf(compile);
}

//invoke everything!
tester();

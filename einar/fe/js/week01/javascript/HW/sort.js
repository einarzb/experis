/**************************************************************************
Task 1 - Write a function arraySort, that accepts an array and sorts it in asscending order.
The function will receive the array to sort, and a reference to a function that will be
used to compare array elements.
function arraySort(toSortArr, cmpFunc)

Mission:
function loop through array and compares each pair of adjacent indexs and
swaps them if they are in the wrong order
The pass through the list is repeated until no swaps are needed,
which indicates that the list is sorted.


if currentindex is bigger then nextIndex (not good)
the indexs will swap themself and a flip would accure(flag is true)
and the while loop would continue.
when currentindex is smaller then next index (good) then you're out of loop
and flag is false, and you
**************************************************************************/

// function arraySort(toSortArr) {
//   //invoke compare function
//   cmpFunc(toSortArr);
// }

var arraySort = function(toSortArr, cmpFunc) {
  //boolean flag => once a swap didnt occure
  var swapFlag = false; //change to noSwap

  //scanning the array
    while (!swapFlag) { //condition is true
        swapFlag = true; //flip flag true b/c there was a swap between indexs

        for (var i = 0; i < toSortArr.length - 1; ++i) {
          //initialize
            var nextIndex = i + 1;
            var temp = toSortArr[nextIndex];

          //if currentindex is bigger then nextIndex
          //they will swap themself and a flip would accure(flag is true)
          //else----- quit loop and progress the nextIndex and try again...

          //user puts the array and his index
            if (cmpFunc(toSortArr[i]), toSortArr[nextIndex]) { //i _ 1
                //swap values
                toSortArr[nextIndex] = toSortArr[i];
                toSortArr[i] = temp;
                // flip to false once the index wasnt swapped
                swapFlag = false;
            }
        }//end for

        //if the current index is bigger then nextIndex then no need to flip
      }//end while
      console.info(toSortArr)
return toSortArr;
}

var toSortArr = [[32,21],[445,2],[7,85],[13,5]];
var cmpFunc = function(arr1,arr2){
  var result1;
  var result2;
  if((arr1[0]-arr2[1])>=(arr1[0]-arr2[1]){
    return 1;
  }
  else{
    return 0;
  }

}
arraySort(toSortArr, cmpFunc);

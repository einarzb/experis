function test() {
   var arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4];
   var arr = [
       ["aa", "v"],
       ["aasadas", "vssss"],
       ["aaaa2", "vss"],
       ["ccc", "c"]
   ]
   console.log(bubbleSort(arr, conditionfirststring));
   console.log(bubbleSort(arr, conditionsecondstring));
}
///////////////////////// sorts the array by bubble sort with condition varible conditionFunction
function bubbleSort(array, conditionFunction) {
   var tempArrayElement;
   for (var j = 0; j < array.length; ++j) {
       for (var i = 0; i < array.length - 1 - j; ++i) {
           if (conditionFunction(array[i], array[i + 1])) {
               tempArrayElement = array[i];
               array[i] = array[i + 1];
               array[i + 1] = tempArrayElement;
           }
       }
   }
   return array;
}
//////////////////////////////////////////////////////function checks if first length is more than second in array of 2
function conditionsecondstring(firstElement, secondElement) {
   if (firstElement[0].length > secondElement[0].length) {
       return true;
   }
   return false;
}
/////////////////////////function checks if first element is more than second
function conditionfirststring(firstElement, secondElement) {
   if (firstElement > secondElement) {
       return true;
   }
   return false;
}

module.exports.bubbleSort = bubbleSort;

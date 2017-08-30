/*********************************************************
task 2 - Write a function that is similar to the array splice function, described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?v=control
Again, our function will receive
splice(array,start, deleteCount, item1, item2, ...)
***********************************************************/

function arraySplice(array, start, deleteCount) {
  //initialize
    var result = [];
    var removed = [];
    var argsLen = arguments.length;
    var arrLen = array.length;

    // first deal with negative start value
    if (start < 0) {
        start = arrLen + start
        //ternary
        start = (start > 0)? start : 0;
    } else {
        start = (start < arrLen)? start : arrLen;
    }

    // Deal with negative deleteCount value
    if (deleteCount < 0) {
        deleteCount = 0;
    }
    // initialize counter to the maximum amount of values possible to delete
    if (deleteCount > (arrLen - start)) {
        deleteCount = arrLen - start;
    }

    // Copy elements up to start
    for (var i = 0; i < start; ++i) {
        result[i] = array[i];
    }

    // Add new elements supplied in function parameters
    // var i = 3 is the index of the first element to add.
    for (var i = 3; i < argsLen; ++i) {
        result[result.length] = arguments[i];
    }

    // Copy removed items that will be removed, to removed array
    for (var i = start; i < start + deleteCount; ++i) {
        removed[removed.length] = array[i];
    }

    // Add the rest of the items to our result array
    for (var i = start + deleteCount; i < arrLen; ++i) {
        result[result.length] = array[i];
    }

    // Update original array
   	array.length = result.length;
    for (var i = 0; i < result.length; ++i) {
		array[i] = result[i];
    }

    // Finally, return array of removed elements
    return removed;
}

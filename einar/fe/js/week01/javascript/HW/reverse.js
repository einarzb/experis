/*********************************************************
Write a function that reverses a string using recursive function.
*********************************************************/

function reverseStr(str) {
  //first check that string isn't empty
	if (str.length === 0) {
    	return str;
	}
  //initialize
	var lastChar = str[str.length - 1];
	var tempStr = "";

	for (var i = 0; i < str.length - 1; ++i) {
		tempStr += str[i];
	}
	return lastChar + reverseStr(tempStr);
}

reverseStr("EinarIsMcgyver");rev

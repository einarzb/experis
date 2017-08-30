function strSplit(str, splitChar) {
  //initialize
	var splittedArr = [];
	var spacer = "";

	for (var i = 0; i < str.length; ++i) {
    //if char in input is NOT the splice char
    	if (str[i] !== splitChar) {
        //then push it to SPACER STRING
        	spacer += str[i];
		}
    //if char in input IS the splice char
		else {
      //then assign spacer strings to the new splitted array
			splittedArr[splittedArr.length] = spacer;
      //and then reassign spacer to be "" again (its like flag)
			spacer = "";
		}
	} //end for loop

// assign spacer strings to the new splitted array

	if (spacer.length !== 0) {
		splittedArr[splittedArr.length] = spacer;
	}
  //
  console.info(splittedArr);
	return splittedArr;
}

//invoke
strSplit("abbcbcbbcbcbccbbddd", 'c');

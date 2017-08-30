
//execute function as page loads (like document ready)
window.onload = function() {
  var form = document.getElementById('myForm');
  var inputs = form.getElementsByTagName('input');

  if(inputs.length > 0)
  {
    inputs[0].onchange = makeJSON;
  }

  if (localStorage.myObject) {
    var myObj = JSON.parse(localStorage.myObject);
    alert(myObj.name + " is the name");
  }

  if (localStorage['myForm']) {
    alert('loading:\n' + localStorage['myForm']);
    localStorage['myForm'] = "";
  }

  for (var i=0; i<inputs.length; ++i) {
    var inp = inputs[i];
    //Execute a JavaScript when a user changes the content of an input field
    inp.onchange = function() {
      console.log(this.name+' = '+this.value);
    };
  }
};


function makeJSON(e) {
	var form = document.getElementById('myForm');
	var inputs = form.getElementsByTagName('input');
	var firstname = document.getElementById('firstname');

	var isOK = true;
	var str = '';

	for (var i=0; i<inputs.length; ++i) {
		var inp = inputs[i];
		//name and value are from html form
		str += inp.name + ' = ' + inp.value + '\n';
		isOK = isOK && (inp.value !== '');
	}
	//if input field is empty -  the default action of the event will not be triggered.
	if (!isOK) {
		e.preventDefault();
	}
	//creates an object that holds only firstname
	var myObj = {
		 formID: 'myForm',
		 name: firstname.value
	};

	// Save data to the current local store which is myObject
	//converts a JavaScript value to a JSON string
	localStorage.myObject = JSON.stringify(myObj);

	localStorage['myForm'] = str;
	alert('sending:\n'+str);
}

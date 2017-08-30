
//execute function as page loads (like document ready)
window.onload = function() {
			// 	localStorage.setItem('myCat', 'Tom');
				// console.log(localStorage);
				//returns an HTMLCollection of elements with the given tag name in the order they appear
					var buttons = document.getElementsByTagName('button');
					//if buttons exist in the DOM
					if (buttons.length > 0) {
					//can't be function call.
					//onclick returns the click event handler code on the current element.
					//getAllValues is a reference to a function name and when button is clicked the function is invoked
					buttons[0].onclick = getAllValues;
					}

				//stores data with no expiration date
					if (localStorage.myObject) {
						// the data becomes a JavaScript object.
						var myObj = JSON.parse(localStorage.myObject);
						alert(myObj.name);
					}

				//if theres data in localStorage alert it
					if (localStorage['only-form']) {
						alert('loading:\n'+localStorage['only-form']);
						//clears input fields
						localStorage['only-form'] = '';
					 }

					var form = document.getElementById('only-form');
					var inputs = form.getElementsByTagName('input');

					for (var i=0; i<inputs.length; ++i) {
						var inp = inputs[i];
						//Execute a JavaScript when a user changes the content of an input field
						inp.onchange = function() {
							console.log(this.name+' = '+this.value);
						};
					}
};


function getAllValues(e) {
	var form = document.getElementById('only-form');
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
		 formID: 'only-form',
		 name: firstname.value
	};

	// Save data to the current local store which is myObject
	//converts a JavaScript value to a JSON string
	localStorage.myObject = JSON.stringify(myObj);

	localStorage['only-form'] = str;
	alert('sending:\n'+str);
}

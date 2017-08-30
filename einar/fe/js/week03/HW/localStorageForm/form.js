window.onload = function() {

	if (localStorage.myObject) {
		var myObj = JSON.parse(myObject, id);

    }

	if (localStorage[id]) {
		localStorage[id] = '';
	}

	var forms = document.getElementTagName('form');

    for (var k=0; k<forms.length;++k){
      var inputs = form[k].getElementsByTagName('input');

	for (var i=0; i<inputs.length; ++i) {
		var inp = inputs[i];
		inp.onchange = getAllValues;
		inp.value= myObj[inp.name];

	}
  }

	function getAllValues(e) {


		var myObj = {
		 formID: 'only-form',

	};
      id=k;

	var isOK = true;
	var str = '';
	for (var j=0; j<inputs.length; ++i) {
		var inp2 = inputs[j];
		str += inp2.name + ' = ' + inp.value + '\n';
		isOK = isOK && (inp2.value !== '');
		myObj[inp.name] = inp2.	value;
	}
	if (!isOK) {
		e.preventDefault();
	}


      localStorage[id] = str;
    localStorage.myObject = JSON.stringify(myObj);
	localStorage.setItem(JSON.stringify(myObj), id);
	}
}

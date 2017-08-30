
window.onload = restoreJSON;

function makeJSON(){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");

    var dataObject = new Object();
    dataObject.name = firstname.value;
    dataObject.familyName = lastname.value;
    dataObject.address = address.value;
    dataObject.phone = phone.value;

    localStorage.setItem("data", JSON.stringify(dataObject));
}

function restoreJSON(){
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

    var dataObject = JSON.parse(localStorage.getItem("data"));
    firstname.value = dataObject.name;
    lastname.value = dataObject.familyName;
    address.value = dataObject.address;
    phone.value = dataObject.phone;

}

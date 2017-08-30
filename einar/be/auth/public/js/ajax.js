$(document).ready(function(){

$('#submit').on('click', function () {

           var data = {
               username: $('#username').val(),
               password: $('#password').val()
           }

           $.ajax({
               url: '/login_form',
               method: 'POST',
               dataType: 'JSON',
               cache: false,
               data: data,
               success: function (response) {
                   if (response.login == "success") {
                       window.location.href = response.redirect;
               }
             }
       })
});

});

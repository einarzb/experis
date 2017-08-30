var users = {
  einar:{
     myUsername:"einar",
    myPassword:"6470464"
  }
}

var currentUrl = '/';

var loginCheck = false;


function loggedInCheck(req,res){
  var sess = req.session;

  if(loginCheck) {
    sess.login = true;
    return true;
  }

  //if user not logged in
  if(req.url == '/login'){
      return;
  }

  if(req.url == '/login_form'){
      return;
  }
  currentUrl = req.url;
  res.redirect('/login')
};

function validate(username,password){
  if (username !== users.einar.myUsername) {
        return ({ status: 'wrong username, please try again' });
  }
  if (password !== users.einar.myPassword) {
        return ({ status: 'wrong password, please try again' });
  }
  loginCheck = true;
    return ({ status: 'success', redirect:currentUrl });
};

module.exports = {
  loggedInCheck: loggedInCheck,
  validate: validate
};

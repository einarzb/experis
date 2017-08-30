var users = {
  einar:{
    myUsername:"einar",
    myPassword:"6470464",
    resave: false,
    saveUninitialized: false
  }
}

var currentUrl = '/';
var loginCheck = false;


function loggedInCheck(req,res){
  var sess = req.session;

  if(sess.loginCheck) {
    return true;
  }

  //if user not logged in
  if(req.url == '/users/login'){
      return;
  }

  if(req.url == '/users/login_form'){
      return;
  }
  currentUrl = req.url;
  res.redirect('/users/login')
};

function validate(sess,username,password){
  if (username !== users.einar.myUsername) {
        return ({ status: 'wrong username, please try again' });
  }
  if (password !== users.einar.myPassword) {
        return ({ status: 'wrong password, please try again' });
  }
    sess.loginCheck = true;
    return ({ status: 'success', redirect:currentUrl });
};

module.exports = {
  loggedInCheck: loggedInCheck,
  validate: validate
};

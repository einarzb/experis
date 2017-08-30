var doActionPromise = new Promise(function(resolve,reject){
  if(isOk()){
    resolve('all good')
  } else {
    reject('shit')
  }
});

doActionPromise
  .then(function(res){
    console.log('Success ' + res)
  })
  .catch(function(err){
     console.log('fail ' + err)
  })

function isOk(){
  return parseInt(Math.random()*2) != 0;
}

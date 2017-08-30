const fs = require('fs');
const timeNow = Date.now();

function someAsyncAction(callback){
  fs.readFile('greet.txt', callback)
}

setTimeOut({
    const delay = Date.now() - timeNow;
    console.log(delay + 'ms have passed since I was scheduled');
}, 3000);

someAsyncAction({
  const startCallBack = Date.now();
  while(Date.now() - startCallBack < 10) {
    console.log("shit");
  }
});

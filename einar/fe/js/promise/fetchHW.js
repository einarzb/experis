
function finalRequestPromise(options) {
    return new Promise(function(resolve, reject) {
      //ajax
        var data1 = $.ajax({
          url:'',
          dataType:'json'
        })
        finalRequest(options, function(error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
}

Promise
    .all([initialRequestA(), initialRequestB()])
    .then(function(results) {
        var options = getOptionsFromInitialData(results[0], results[1]);
        return finalRequestPromise(options);
    })
    .then(
        function(file) { alert(file); },
        function(error) { alert('ERROR: '+error); }
    );

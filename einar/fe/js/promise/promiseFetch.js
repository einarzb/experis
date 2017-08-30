let chuckJokes = 'http://api.icndb.com/jokes/random/10';

fetch(chuckJokes)
  .then(function(data){
  return data.json();
  })
  .then(function(jokes){
  console.log(jokes.value[0].joke)
  })
  .catch(function(err){
  console.log(`Error: ${err.message}`)
  })


  function downloadFile(token, fileId) {
    let url = `http://api.icndb.com/jokes/random/10`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    }).then(function(resp) {
      return resp.blob();
    }).then(function(blob) {
      download(blob);
    });
  }

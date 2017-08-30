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

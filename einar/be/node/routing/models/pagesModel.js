
/**********************  pages function  ******************************/
function mainPage (req, res) {
  res.writeHead(200,{'Content-type': 'text/html'});
  res.write('<h2>ggg</h2>');
  res.end();
};

function helloPage (req, res) {
  res.writeHead(200,{'Content-type': 'text/html'});
  res.write('<h2>hello</h2>');
  res.end();
};

module.exports = {
  mainPage: mainPage,
  helloPage: helloPage
}

/*

NOTE: THIS IS NOT THE ACTUAL SOURCE CODE!
IT'S JUST A SERVER THAT REDIRECTS TO THE GAME

VIEW THE SOURCE CODE: https://github.com/codergautam/swordbattle.io

THANK YOU!!!
*/

const express = require('express');

const app = express();

app.all('/*', function(req, res ) {
  console.log("Recieved req "+req.originalUrl)
  res.redirect("https://sword-io-game.herokuapp.com"+req.originalUrl)
})

app.listen(3000, () => {
  console.log('server started');
});

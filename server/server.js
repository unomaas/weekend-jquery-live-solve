//#region ⬇⬇ Server setup below: 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// ⬇ Shows when the server is running below:
app.listen(PORT, () => {
  console.log('PORT Running On:', PORT);
});
// ⬇ This must be added before GET & POST routes below:
app.use(bodyParser.urlencoded({ extended: true }));
// ⬇ Serve up static files (HTML, CSS, Client JS) below:
app.use(express.static( 'server/public' ));
//#endregion ⬆⬆ Server setup above. 
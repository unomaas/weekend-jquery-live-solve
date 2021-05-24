// ⬇ Server setup below: 
const express = require('express');
const app = express();
const PORT = 5000;
app.listen(PORT, () => {
  console.log('PORT Running On:', PORT);
});
// ⬇ Parse application/x-www-form-urlencoded:
app.use(bodyParser.urlencoded({ extended:true }))
// ⬇ Serve static assets/files: 
app.use(express.static( 'server/public' ));



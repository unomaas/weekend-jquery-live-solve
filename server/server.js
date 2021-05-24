//#region ⬇⬇ Server setup below: 
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const PORT = 5000;
// ⬇ Shows when the server is running below:
app.listen( PORT, () => {
  console.log( 'PORT Running On:', PORT );
});
// ⬇ This must be added before GET & POST routes below:
app.use(bodyParser.urlencoded({ extended: true }));
// ⬇ Serve up static files (HTML, CSS, Client JS) below:
app.use(express.static( 'server/public' ));
//#endregion ⬆⬆ Server setup above. 


//#region ⬇⬇ GET/POST functions below: 
app.post( '/operations', ( req, res ) => {
  console.log('Server Log: POST /operations', req.body);
  // ⬇ Grab stuff from the body:
  const firstNumber = Number(req.body.firstNumber); // Need to convert to numbers. 
  const secondNumber = Number(req.body.secondNumber); // Need to convert to numbers. 
  const operator = req.body.operator;

  const result = firstNumber - secondNumber;
  console.log(result);
  


  res.sendStatus(201);
})
//#endregion ⬆⬆ GET/POST functions above. 


//#region ⬇⬇ Calculation functions below: 

//#endregion ⬆⬆ Calculation functions above. 
//#region ⬇⬇ All server setup and global variables below:
//#region ⬇ Server setup below:
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
//#endregion ⬆ Server setup above. 

//#region ⬇ Global variables below:
let operations = [];
//#endregion ⬆ Global variables above. 
//#endregion ⬆⬆ All server setup and global variables above. 


//#region ⬇⬇ GET/POST functions below: 
app.post( '/operations', ( req, res ) => {
  console.log('Server Log: POST /operations', req.body);
  // ⬇ Grab stuff from the body:
  const firstNumber = Number(req.body.firstNumber); // Need to convert to numbers. 
  const secondNumber = Number(req.body.secondNumber); // Need to convert to numbers. 
  const operator = req.body.operator;

  // ⬇ Calculation code below:
  let result = 0;
  if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '-') {
    result = firstNumber - secondNumber;
  } else if (operator === '*') {
    result = firstNumber * secondNumber;
  } else if (operator === '/') {
    result = firstNumber / secondNumber;
  } else { // Edan says to always have an else for bad client decisions, and .send lets you send a message with it.  
    res.sendStatus(400).send('Invalid operator.');
    return;
  }
  console.log(result);

  // ⬇ Add our operations object to the global variable array, so that our GET endpoint can use it later.
  operations.push({
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operator: operator,
    result: result,
  });

  // ⬇ Sending Created back:
  res.sendStatus(201);
})

app.get( '/operations', ( req, res ) => {
  console.log('Server Log: GET /operations', req.body);
  res.send(res.body);
});

//#endregion ⬆⬆ GET/POST functions above. 


//#region ⬇⬇ Calculation functions below: 

//#endregion ⬆⬆ Calculation functions above. 
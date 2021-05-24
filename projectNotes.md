## Feature List: 

Client Side: 
- [] "Calculator" Form:
  - [] Two inputs which are numbers.
  - [] Select type of mathematical operation.
  - [] A submit ("equals") button.
  - [] A "C" button to clear input fields. 
- [] POST data from form to server.
- [] Display list of previous operations at bottom.
  - [] Update list after every new calculation.
  - [] History should exist even after refreshing page.

Server Side:
- [] Do the math on server-side only. 
  - [] Should be able to handle addition, subtraction, multiplication, division.
- [] Send back "OK" (200 sendStatus). 
- [] Do a GET request after POST to get the calc to post to history output. 



## To Do:

Setup:
- [x] npm init, install express, etc.
  - [x] Run the following codes in terminal separately:
    - [x] "npm init --y" : Installs node (aka npm).
    - [x] "npm install express body-parser" : Installs express server with bodyParser.  
- [x] Setup express server.
  - [x] Body Parser. 
- [x] HTML/CSS/JS fleshed out. 
- [x] jQuery installed (bootstrap, etc.). 

Planning:
- [x] Make a To Do list. 
- [x] Plan the data model. 
- [x] Plan the API end points. 

Stuff for Later:
- [] Make it look pretty.
- [] Clean up code. 


## Ryan's Notes on Edan's Processes:

- Before he writes code, he thinks about the front-end, the back-end (data model), and the wireframe.
  - When he says "data model", he thinks about what kind of JavaScript and Array's.  Basically if you know what type of data you're using, it's easier to write code around that.
  - He's usually thinking what type of things are we dealing with, what is our noun.
  - He likes starting with this because it's a common model, everyone can look at it in every language and understand it.  Then as you get into group projects, start with the data model.
    - Once you have the data model, we can just work in our own little area.  
  - A list view of things in that list would be:
    - Operations: In app, have an array, and everything in that array is an object:
      - [
          {
            firstNumber : 12,
            secondNumber : 4,
            Operator : "-",
            Result : 8,
          }
        ]
  - API End Points: 
    - Will need POST operations:
      - Sends an operation to the server.
      - Request Body: 
        -  {
              firstNumber : 12,
              secondNumber : 4,
              Operator : "-",
              Result : 8,
            }
    - Will need GET operations:
      - Gets a list of operations from the server to render on DOM. 
      - Response Body:
        - [
            {
              firstNumber : 12,
              secondNumber : 4,
              Operator : "-",
              Result : 8,
            }
          ]
    - Since Edan already has his data model, his API end points can be modeled after that.
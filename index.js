var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/randomfact", (req, res, next) => {
 function getRandomNumber() {
 return Math.floor(Math.random() * 100) + 1;
 }

 var randNum = getRandomNumber();

 var i;
 var fact = 1;
 for (i = 1; i <= randNum; i++ ) {
 fact = fact * i;
 }

 res.json({'Number': randNum,'Factorial': fact});

});

app.get('/', (req, res) => {
 var num = req.query.num;
 var i;
 var numFact = 1;
 for (i = 1; i <= num; i++ ) {
 numFact = numFact * i;
 }

 res.json({'Number Entered': num,'Factorial': numFact});

});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
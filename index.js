const googleTrends = require('google-trends-api');
const express      = require("express");
var bodyParser     = require('body-parser');
const app          = express();
const PORT         = 1338;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// var optionsObject = {
//   keyword :"christmas",
//   startTime : new Date("2010-01-01")
// }

app.post('/', function (req, res) {
  var optionsObject       = req.body.options;
  optionsObject.startTime = new Date(optionsObject.startTime);


  console.log(" var user_id = req.body.id;", req.body.options);
  googleTrends.interestOverTime(req.body.options, function(err, results){
    if(err){
      console.error('there was an error!', err);
      res.status(500).json(err);
    }
    // else console.log('my sweet sweet results', JSON.stringify(results, null, 4));
    else console.log('my sweet sweet results', JSON.stringify(results, null, 4));
    res.status(200).json(JSON.parse(results));
  })
})

app.listen(PORT)
console.log("Runing server on port ",PORT);

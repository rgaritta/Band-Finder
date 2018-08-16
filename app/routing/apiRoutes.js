var path = require("path");

var bands = require("../data/bands");


module.exports = function(app) {
    /*
    Psuedocode 
    Write the routes using get and post for the apis. 
    Include functionality for the logic of the app.
    Compile the scores and choose a band based on user input.
    Send the information to be displayed via a modal.
    */

   app.get("/api/bands", function(req, res) {
    res.json(bands);
  });

  app.post("/api/bands", function(req, res) {
    //need to add algorithm and matching


  });



}
// app/api.js

// grab the Volunteers model
var volunteers = require('./models/volunteers');

   module.exports = function(app) {

// Server routes.  Handles api calls, authentication etc///////////////////////////////////////////

       // get all volunteers api call
       app.get('/api/volunteers', function(req, res) {
           // use mongoose to get all Volunteers in the database
           // console.log('get Volunteers');
           volunteers.find(function(err, volunteers) {
               // if there is an error retrieving, send the error.
               // nothing after res.send(err) will execute
               if (err)res.send(err);
               res.json({ all : volunteers }); // return all Volunteers in JSON format
           });
       });



       // route to handle posting a new volunteer to the database (app.post)
       app.post('/api/addVolunteer', function(req, res) {
           var newVolunteer = new volunteers(req.body);      // create a new instance of the Volunteers model
           newVolunteer.title = req.body.title;  // set the Volunteers info (comes from the request)
           newVolunteer.save(function(err, volunteer) {
               if (err){
                 res.send(err);
                 console.log(err);
               }

               res.json({ volunteer: volunteer });
           });
       });

       // delete a volunteer goes here based on object _id (app.delete)
       app.delete('/api/removeVolunteer/:_id', function(req, res) {

       volunteers.remove({
           _id: req.params._id,
         }, function(err, volunteer) {
               if (err)res.send(err);
               res.json({ message: 'Successfully removed volunteer'});
           });
       });
   };

 // app/routes.js

// grab the Volunteers model
var volunteers = require('./models/volunteers');

    module.exports = function(app) {

// Server routes.  Handles api calls, authentication etc///////////////////////////////////////////

        // get all api call
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



        // route to handle creating (app.post)
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

        // route to handle delete goes here based on object _id (app.delete)
        app.delete('/api/removeVolunteer/:_id', function(req, res) {

        Volunteers.remove({
            _id: req.params._id,
          }, function(err, volunteer) {
                if (err)res.send(err);
                res.json({ message: 'Successfully removed volunteer'});
            });
        });


// Frontend routes to display view/////////////////////////////////////////////

        // route to handle root view
        app.get('/', function(req, res) {
            // load our public/index.ejs file
            res.render('index');
        });

        // route to Signup view
        app.get('/signup', function(req, res) {
            // load our public/create.ejs file
            res.render('signup');
        });

        // route to get help view
        app.get('/resources', function(req, res) {
            // load our public/help.ejs file
            res.render('resources');
        });

        // catch 404 and forward to error handler
        app.get('*', function(req, res) {
          res.render('error', { title: 'Page Not Found' }); // load our public/error.ejs file
        });

    };

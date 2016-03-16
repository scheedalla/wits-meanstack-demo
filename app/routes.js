 // app/routes.js


    module.exports = function(app) {

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

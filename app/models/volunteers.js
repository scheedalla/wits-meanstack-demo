// app/models/volunteers.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our model
// module.exports allows us to pass this to other files when it is called.  This happens in api.js
module.exports = mongoose.model('volunteers', new mongoose.Schema({
    name:{type:String, default:'', required:false},
    email:{type:String, default:'', required:false},
    location:{type:String, default:'', required:false},
    position:{type:String, default:'', required:false}
}));

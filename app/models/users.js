// mongoose module
var mongoose = require('mongoose');

// module.exports allows to pass this to other files when it is called
module.exports = mongoose.model('user', {
    email : {type : String, default: ''},
    password : {type : String, default: ''}
});

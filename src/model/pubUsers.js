var mongoose = require('mongoose'),
    Schema = mongoose.Schema;    

var pubUserSchema =  new Schema({
    username: { type: String, unique: true },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    role: { type: String },
    verified: { type: Boolean },
    imageUrl: { type: String },
});

var pubUserModel = mongoose.model('pubUsers', pubUserSchema);

module.exports = function() {
    return pubUserModel;
};
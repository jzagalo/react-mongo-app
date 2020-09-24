var mongoose = require('mongoose'),
    Schema = mongoose.Schema;    

var ArticleSchema =  new Schema({
    articleTitle: { type: String, unique: true },
    articleContent: { type: String },
});

var ArticlesModel = mongoose.model('Articles', ArticleSchema);

module.exports = function() {
    return ArticlesModel;
};
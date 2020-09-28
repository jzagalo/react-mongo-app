var mongoose = require('mongoose');

const conf = {
    hostname: process.env.MONGO_HOSTNAME || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    env: process.env.MONGO_ENV || 'local',
};

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const articleSchema = {
    articleTitle: String,
    articleContent: String
};

const Artcle = mongoose.model('Article', articleSchema, 'articles');

module.exports = Artcle;

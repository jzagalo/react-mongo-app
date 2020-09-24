var http = require('http'),    
    express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    ArticleModel = require('./src/model/articles')(),
    app = express();


mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const Article = new ArticleModel({
    articleTitle: "Blog Article",
    articleContent: "E-commerce Articles",
});

//Article.save();

app.server = http.createServer(app);
// Cors -3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to correctly withi falcor-browser
app.use(bodyParser.json({ extended: true }));
//app.use(express.static('data'));

app.get("/", function(req, res){   
    res.send("Jeson"); 
});

app.server.listen(8080, function(){
    console.log(`Strted on port ${app.server.address().port}`);
});

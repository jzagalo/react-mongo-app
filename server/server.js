var http = require('http'),    
    express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    pubUserModel = require('../src/model/pubUsers')(),
    falcor = require('falcor'),
    falcorExpress = require('falcor-express'),
    httpDataSource = require('falcor-http-datasource'),
    routes = require('./routes'),
    falcorRouter = require('falcor-router'),
    app = express();

mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const pubUser = new pubUserModel({
    username : 'admin',
    password : 'c5a0df4e293953d6048e78bd9849ec0ddce811f0b29f72564714e474615a7852',
    firstName : 'Kamil',
    lastName : 'Przeorski',
    email : 'kamil@mobilewebpro.pl',
    role : 'admin',
    verified : false,
    imageUrl : 'http://lorempixel.com/100/100/people/'
});

//pubUser.save();

app.server = http.createServer(app);

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// This is required by falcor-express middleware to correctly withi falcor-browser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let cache = {
    articles: [        
        {
            id: 987654,
            articleTitle: 'Lorem ipsum - article one',
            articleContent: 'Here goes the content of the article'
        },
        {
            id: 123456,
            articleTitle: 'Lorem ipsum - article two from backend',
            articleContent: 'Sky is the limit, the content goes  here.'
        }
    ]
};

var model = new falcor.Model({
    cache: cache
});

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
    return model.asDataSource();
}));



app.server.listen(8080, function(){
    console.log(`Started on port ${app.server.address().port}`);
});

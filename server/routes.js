var articles = require("../src/reducers/article");
var configMongoose = require('./configMongoose');
var sessionRoutes = require('./routeSession');
var Article = configMongoose.Article;

const PublishingAppRoutes = [{
   // ...sessionRoutes,
    route: 'articles.length',
    get: () => {
        const articlesCountInDB = 2 // hardcoded for example
        return {
            path: ['articles', 'length'],
            value: articlesCountInDB
        }
    }
  },
  {
      route: 'articles[{ integers }]["id", "articleTitle", "articleContent"]',
      get: (pathSet) => {
          console.info(pathSet);

          const articlesIndex = pathSet[1];
          const articlesArrayFromDB = [{
              'articleId': '987654',
              'articleTitle': 'BACKEND Lorem ipsum - article one',
              'articleContent': 'BACKEND Here goes the content of the article'
          },{
            'articleId': '123456',
            'articleTitle': 'BACKEND Lorem ipsum - article two',
            'articleContent': 'BACKEND the Sky is the limit, the content goes here'
          }        
        ];
       let results = [];
       articlesIndex.forEach((index) => {
            const singleArticleObject = articlesArrayFromDB[index];
            const falcorSingleArticleResult = {
                path: ['articles', index],
                value: singleArticleObject
            }
            results.push(falcorSingleArticleResult);
       });

       return results;
   }
  }
];

module.exports = PublishingAppRoutes;
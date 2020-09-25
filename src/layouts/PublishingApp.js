import React, { Component } from 'react';
import { connect } from "react-redux";
import falcorModel from '../falcorModel';
import { bindActionCreators } from 'redux';
import articleActions from "../actions/article";
//import article from '../reducers/article';

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    articleActions: bindActionCreators(
        articleActions, dispatch
    )
 });

class PublishingApp extends Component {

    componentDidMount(){        
        this._fetch();
    }

    async _fetch(){
        const articlesLength = await falcorModel                 
                .getValue('articles.length')
                .then((length)  => length);

        const articles = await falcorModel
                .get([ 'articles', { from: 0, to: articlesLength -1 },
                    ['id', 'articleTitle', 'articleContent']])
                .then((articleResponse) => articleResponse.json.articles);

        this.props.articleActions.articlesList(articles);
    }

    render() {
        let articlesJSX = [];
        
        for(let articleKey in this.props){
            const articleDetails = this.props[articleKey];            

            const currentArticleJSX = (
                <div key={articleKey}>
                    <h2>{articleDetails.articleTitle}</h2>
                    <h3>{articleDetails.articleContent}</h3>
                </div>
            )
            articlesJSX.push(currentArticleJSX);
        }
        return (
            <div>
                {articlesJSX}    
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);



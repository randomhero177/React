import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../myDecorators/accordion'
import {connect} from 'react-redux'
import {filterArticlesSelector} from '../selectors'

 class ArticleList extends Component {

     static propTypes = {
       // from connect
       articles: PropTypes.array.isRequired,
       // passes from myDecorators/accordion
       openItemId: PropTypes.string,
       toggleOpen: PropTypes.func
     }

  render(){
    const {articles, openItemId, toggleOpen } = this.props;
    const articleElements = articles.map((article) => <li key = {article.id} >
      <Article
        article = {article}
        openItemId = {openItemId}
        toggleOpen = {toggleOpen(article.id)}
        isOpen = {article.id === openItemId} />
    </li>)
  //  console.log(articleElements);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

}

export default connect((state) => {
    return {
      articles: filterArticlesSelector(state)
    }
})(accordion(ArticleList))

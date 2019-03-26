import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../myDecorators/accordion'
import {connect} from 'react-redux'

 class ArticleList extends Component {

     static propTypes = {
       // from connect
       articles: PropTypes.array.isRequired,
       // passes from myDecorators/accordion
       openItemId: PropTypes.string,
       toggleOpen: PropTypes.func
     }

  render(){
    const {openItemId, toggleOpen } = this.props;
    const articleElements = this.props.articles.map((article) => <li key = {article.id} >
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

export default connect(state => ({
    articles: state.articles
}))(accordion(ArticleList))

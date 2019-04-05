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

export default connect(({filters, articles}) => {
    let {selected, dateRange: {from, to}} = filters;
    selected = selected.map(article => article.value)
    

    const filteredArticles = articles.filter(article => {
    const published =  Date.parse(article.date);

      console.log(selected, article);

      return (!selected.length || selected.includes(article.id)) &&
      (!from  || !to || (published > from && published < to))
    });
    console.log(filteredArticles);


    return {
      articles: filteredArticles
    }
})(accordion(ArticleList))

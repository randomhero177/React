import React, {Component} from 'react'
import Article from './Article'

export default class ArticleList extends Component {
  state = {
    openArticleId: null
  }

  render(){
    const articleElements = this.props.articles.map((article) => <li key = {article.id} >
      <Article
        article = {article}
        isOpen = {this.state.openArticleId === article.id}
        toggleOpen = {this.toggleArticleOpen(article.id)}

      />
    </li>)
  //  console.log(articleElements);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

  toggleArticleOpen = (openArticleId) => (e) => {
    console.log(this);
    console.log(openArticleId);
    this.setState({
      openArticleId
    })
  }
}

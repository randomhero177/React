import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentList from '../CommentsList'
import toggleOpen from '../../myDecorators/toggleOpen'
import accordeon from '../../myDecorators/accordion'
import { CSSTransitionGroup } from 'react-transition-group'
import {deleteArticle} from '../../AC'
import './style.css'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func
  }

  componentWillReceiveProps(nextProps){
  //  console.log('----', this.props.isOpen, nextProps.isOpen)
  }

/*
  componentWillMount(){
    debugger
  }
*/

  render(){
    const {article, isOpen, toggleOpen} = this.props;

    return (
      <div ref = {this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick = {this.handleDelete}> delete </button>
        <CSSTransitionGroup
          transitionName='article'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
          component = 'div'>
          {this.getArticleBody()}
        </CSSTransitionGroup>
      </div>
    )
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id)
    console.log('--deleting --')
  }

  setContainerRef = ref => {
    this.container = ref;
  }

  ComponentDidMount(){
    debugger
  }

  getArticleBody() {
    const {article, isOpen} = this.props;
    if(!isOpen) return null
    console.log(article.comments);
    return (
      <section>
        {article.text}
        <CommentList comments = {article.comments} ref = {this.setCommentsRef} />
      </section>

    )
  }

  setCommentsRef = ref => {
    console.log('----', ref, findDOMNode(ref))
  }
}

export default connect(null, {deleteArticle})(Article)

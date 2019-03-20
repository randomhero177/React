import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentsList'
import toggleOpen from '../myDecorators/toggleOpen'
import accordeon from '../myDecorators/accordion'

export default class Article extends Component {
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
        {this.getArticleBody()}
      </div>
    )
  }

  setContainerRef = ref => {
    this.container = ref;
  //  console.log(this.container);
  }

  ComponentDidMount(){
    debugger
  }

  getArticleBody() {
    const {article, isOpen} = this.props;
    if(!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments = {article.comments} ref = {this.setCommentsRef} />
      </section>

    )
  }

  setCommentsRef = ref => {
    console.log('----', ref)
  }

}

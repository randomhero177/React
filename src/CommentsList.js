import React, {Component} from 'react'
import Article from './Article'
import Comment from './Comment'

export default class CommentList extends Component{
  static defaultProps = {
    comments: []
  }

  state = {
    isOpen: false
  }

  render(){
    const {isOpen} = this.state;
    const {comments} = this.props;
    const btnText = (isOpen) ? "Не покажи" : "Покажи";


    return(
      <div>
        {comments.length  ? (<button onClick = {this.toggleComment}>{btnText}</button>) : 'хуй'}
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    if(!this.state.isOpen) return null

    const {comments} = this.props;
    const commentElem = (comments.length) ?  comments.map((comment) => <div key = {comment.id}><Comment comment = {comment}/></div>) : 'хуй';
    return(
      <div>{commentElem}</div>
    )
  }

  toggleComment = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }


}

import React, {Component} from 'react'
import Article from './Article'
import Comment from './Comment'

export default class CommentList extends Component{
  constructor(props){
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render(){
    const {isOpen} = this.state;
    const {comments} = this.props;
    const btnText = (isOpen) ? "Не покажи" : "Покажи";


    return(
      <div>
        {comments  ? (<button onClick = {this.toggleComment}>{btnText}</button>) : null}
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    if(!this.state.isOpen) return null

    const {comments} = this.props;
    const commentElem = (comments) ?  comments.map((comment) => <div key = {comment.id}><Comment comment = {comment}/></div>) : null;
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

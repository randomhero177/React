import React, {Component} from 'react'
import Article from './Article'
import Comment from './Comment'
import toggleOpen from '../myDecorators/toggleOpen'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'

function CommentList({comments = [], isOpen, toggleOpen}){
    const btnText = (isOpen) ? "Не покажи" : "Покажи";

    return(
      <div>
        {comments.length  ? (<button onClick = {toggleOpen}>{btnText}</button>) : 'хуй'}
        {getBody({comments, isOpen})}
      </div>
    )
}

CommentList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func
}

function getBody({comments = [], isOpen}){
  if(!isOpen) return null

  const commentElem = (comments.length) ?  comments.map((comment) => <div key = {comment.id}><Comment comment = {comment}/></div>) : 'хуй';
  return(
    <div>
      {commentElem}
      <CommentForm />
    </div>
  )
}

getBody.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default toggleOpen(CommentList)

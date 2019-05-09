import React, {Component} from 'react'
import Article from './Article'
import Comment from './Comment'
import toggleOpen from '../myDecorators/toggleOpen'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'

function CommentList({article, isOpen, toggleOpen}){
    const btnText = (isOpen) ? "Не покажи" : "Покажи";

    return(
      <div>
        {article.comments.length  ? (<button onClick = {toggleOpen}>{btnText}</button>) : 'хуй'}
        {getBody({article, isOpen})}
      </div>
    )
}

CommentList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func
}

function getBody({article: {comments = [], id }, isOpen}){
  if(!isOpen) return null

  const commentElem = (comments.length) ?  comments.map((id) => <div key = {id}><Comment id = {id}/></div>) : 'хуй';
  return(
    <div>
      {commentElem}
      <CommentForm articleId = {id}/>
    </div>
  )
}

getBody.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default toggleOpen(CommentList)

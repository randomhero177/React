import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}) {
    console.log(comment);
    return (
      <div>
        <h3>{comment.user}</h3>
        <p>{comment.text}</p>
      </div>
    )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  // from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  })
}

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();
  
  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    }
  }
}

export default connect(mapStateToProps)(Comment)

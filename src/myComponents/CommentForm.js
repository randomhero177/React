import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import './form.css'
import {addComment} from '../AC'
import {connect} from 'react-redux'

class CommentForm extends Component {

  constructor(){
    super();

    this.state = {
      user: '',
      text: ''
    }
  }


  render(){
    return (
      <form action = 'Post' onSubmit = {this.handleSubmit}>
        <div>
          <div>name:</div>
          <input type='text'
            value = {this.state.user}
            onChange = {this.handleChange('user')}
            className = {this.getClassName('user')}/>
        </div>
        <div>
          <div>text:</div>
          <textarea
            value = {this.state.text}
            onChange = {this.handleChange('text')}
            className = {this.getClassName('text')}/>
            <input
              type="submit"
              value="ОТправить" />
        </div>
      </form>
    )
  }

  handleChange = type => (ev) => {
    const {value} = ev.target;

    if(value.length > limits[type].max) return
    this.setState({
      [type]: value
    });
  //  addComment(value);
  }

  getClassName = type => {
    return (this.state[type].length && this.state[type].length < limits[type].min) ? 'input--error' : ''
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      user: '',
      text: ''
    })
  }
}

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 5,
    max: 30
  }
}

export default connect(null, (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)

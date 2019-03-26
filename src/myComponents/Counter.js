import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
 static PropTypes = {
   counter: PropTypes.number,
   increment: PropTypes.func.isRequired
 }

 render(){
   return(
     <div>
      <h2>{this.props.counter}</h2>
      <button onClick = {this.handleIncrement}>Click Me </button>
     </div>
   )
 }

 handleIncrement = () => {
   console.log('---', 'incr' )
   const {increment} = this.props;
   increment();
 }
}


export default connect((state) => ({
  counter: state.count
}), {increment})(Counter)

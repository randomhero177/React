import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {articles} from '../../fixtures'
import {connect} from 'react-redux'
import {changeSelection} from '../../AC'


class SelectFilter extends Component {

  render() {

    const options = articles.map(article => ({
      label:  article.title,
      value: article.id
    }))

    return (
      <Select
        options = {options}
        value = {this.props.selected}
        onChange = {this.handleChange}
        multi = {true}/>
    )
  }


  handleChange = selection => {

    // this.setState({selection});
    this.props.changeSelection(selection);
  }
}

export default connect(state => ({
  selected: state.filters.selected
}), {changeSelection})(SelectFilter)

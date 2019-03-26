import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {articles} from '../../fixtures'

export default class SelectFilter extends Component {
  state = {
    selection: null
  }

  render() {
    const options = articles.map(article => ({
      label:  article.title,
      value: article.id
    }))

    return(
      <Select
        options = {options}
        value = {this.state.selection}
        onChange = {this.changeSelection}
        multi = {true}/>
    )
  }

  changeSelection = selection => this.setState({selection})
}

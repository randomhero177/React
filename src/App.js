import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import ArticleList from './myComponents/ArticleList'

import {articles} from './fixtures'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import SetDayPicker from './myComponents/SetDayPicker'


class App extends Component{
  static propTypes = {

  };

  state = {
    selection: null
  }

  render(){
    const {articles} = this.props;
    const options = articles.map(article => ({
      label:  article.title,
      value: article.id
    }))
    return (
      <div>
        <UserForm />
        <SetDayPicker />
        <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi = {true}/>
        <ArticleList articles = {articles} openDefault = {articles[0].id}/>
      </div>
    )
  }

  changeSelection = selection => this.setState({selection})
}

export default App

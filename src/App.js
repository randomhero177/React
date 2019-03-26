import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import ArticleList from './myComponents/ArticleList'

import {articles} from './fixtures'
import UserForm from './UserForm'
import Filters from './myComponents/Filters'
import Counter from './myComponents/Counter'

class App extends Component{
  static propTypes = {

  };


  render(){
    return (
      <div>
        <Counter />
        <UserForm />
        <Filters articles = {[]}/>
        <ArticleList />
      </div>
    )
  }

}

export default App

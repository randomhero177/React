import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import ArticleList from './myComponents/ArticleList'

import {articles} from './fixtures'
import UserForm from './UserForm'
import Filters from './myComponents/Filters'

class App extends Component{
  static propTypes = {

  };


  render(){
    const {articles} = this.props;

    return (
      <div>
        <UserForm />
        <Filters />
        <ArticleList articles = {articles} openDefault = {articles[0].id}/>
      </div>
    )
  }

}

export default App

import React from 'react'
import {render} from 'react-dom'
import Root from './myComponents/Root'
import {articles} from './fixtures'

render(<Root articles = {articles} />, document.getElementById('container'))

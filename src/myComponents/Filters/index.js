import React, {Component} from 'react'
import SelectFilter from './Select'
import DayPicker from './DayPicker'

export default class Filters extends Component {
  render() {
    return(
      <div>
        <DayPicker />
        <SelectFilter/>
      </div>
    )
  }
}

import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {connect} from 'react-redux';

import { changeDateRange } from '../../AC'

import 'react-day-picker/lib/style.css';

class SetDayPicker extends Component {

  render() {
      const { from, to } = this.props.range;
      const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
      return (
          <div className="date-range">
              <DayPicker
                  ref="daypicker"
                  selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                  onDayClick={ this.handleDayClick }
              />
              {selectedRange}
          </div>
      );
  }

  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props;
    changeDateRange(DateUtils.addDayToRange(day, range));
  }
}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(SetDayPicker)

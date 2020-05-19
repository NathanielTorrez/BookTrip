/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import styled from 'styled-components';


class NewCal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // startDate: null,
      // endDate: null,

    };
  }


  render() {
    const { that } = this.props;
    return (
      <div>
        <Label>Dates</Label>
        <DateRangePicker
          startDate={that.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={that.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={
            ({ startDate, endDate }) => that.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={that.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => that.setState({ focusedInput })}
          numberOfMonths={1}
          startDatePlaceholderText="Check-in"
          endDatePlaceholderText="Checkout"
          block
        />
      </div>
    );
  }
}

export default NewCal;

const Label = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.33333em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

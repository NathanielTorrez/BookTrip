/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';

class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // open: false,
    };
  }

  clickHandler() {
    // const that = this;
    // console.log('CLICK!!');
    // if (that.state.open) {
    //   that.setState({ open: false });
    // } else {
    //   that.setState({ open: true });
    // }
    // console.log(that.state);
    this.props.click();
  }

  render() {
    const clickHandler = this.clickHandler.bind(this);
    return (
      <Format>
        <Label>Dates</Label>
        <Stylediv>
          <Leftbox onClick={this.clickHandler.bind(this)}>
            {this.props.dates.startDate}
          </Leftbox>
          <Leftbox>
            <img src="arrow.png" alt="" width="35px" height="20px" />
          </Leftbox>
          <Leftbox onClick={this.clickHandler.bind(this)}>
            {this.props.dates.endDate}
          </Leftbox>
        </Stylediv>
        <Calendar open={this.props.open} click={clickHandler} clear={this.props.clear} />

        <Clear />
      </Format>
    );
  }
}

export default Dates;

const Format = styled.div`
  overflow-wrap: break-word !important;
  font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
`;

const Label = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.33333em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

const Stylediv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid;
  border-color: lightgray;
  border-radius: 3px;
  display: grid;
  grid-template-columns: auto 60px auto;
`;

const Leftbox = styled.span`
  padding: 15px;
  color: rgb(172, 167, 167);
  background: white;
  font-size: 18px;
  margin-top: auto;
  margin-bottom: auto;
`;

const Clear = styled.br`
  clear: both;
`;

/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Dropdown from './Guest-dropdown.jsx';


class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      Adults: 1,
      Children: 0,
      Infants: 0,
      infantText: '',
      max: this.props.guests,
      guests: 1,
      noun: 'guest',
    };
  }

  changeGuest() {
    if (this.state.guests === 1) {
      this.setState({ noun: 'guest' });
    } else {
      this.setState({ noun: 'guests' });
    }
  }

  clickHandler() {
    const that = this;
    // console.log('CLICK!!');
    if (that.state.open) {
      that.setState({ open: false });
    } else {
      that.setState({ open: true });
    }
    that.setState({ max: that.props.guests });
    // console.log(that.state);
  }

  guestHandler(action, ele) {
    const that = this;
    // console.log(action, ele);
    if (ele === 'Adults') {
      if (action === '-') {
        if (that.state.Adults > 1) {
          const newVal = that.state.Adults - 1;
          const newGuest = that.state.guests - 1;
          that.setState({ Adults: newVal });
          that.setState({ guests: newGuest });
          if (newGuest === 1) {
            that.setState({ noun: 'guest' });
          }
        }
      } else if (that.state.guests < that.state.max) {
        const newVal = that.state.Adults + 1;
        const newGuest = that.state.guests + 1;
        that.setState({ Adults: newVal });
        that.setState({ guests: newGuest });
        if (newGuest > 1) {
          that.setState({ noun: 'guests' });
        }
      }
    }
    if (ele === 'Children') {
      if (action === '-') {
        if (that.state.Children > 0) {
          const newVal = that.state.Children - 1;
          const newGuest = that.state.guests - 1;
          that.setState({ Children: newVal });
          that.setState({ guests: newGuest });
          if (newGuest === 1) {
            that.setState({ noun: 'guest' });
          }
        }
      } else if (that.state.guests < that.state.max) {
        const newVal = that.state.Children + 1;
        const newGuest = that.state.guests + 1;
        that.setState({ Children: newVal });
        that.setState({ guests: newGuest });
        if (newGuest > 1) {
          that.setState({ noun: 'guests' });
        }
      }
    }
    if (ele === 'Infants') {
      if (action === '-') {
        if (that.state.Infants > 0) {
          const newVal = that.state.Infants - 1;
          that.setState({ Infants: newVal });
          if (newVal === 0) {
            that.setState({ infantText: '' });
          } else if (newVal === 1) {
            that.setState({ infantText: ' , 1 Infant' });
          } else {
            that.setState({ infantText: ` , ${newVal} Infants` });
          }
        }
      } else if (that.state.Infants < 5) {
        const newVal = that.state.Infants + 1;
        that.setState({ Infants: newVal });
        if (newVal === 1) {
          that.setState({ infantText: ' , 1 Infant' });
        } else if (newVal > 1) {
          that.setState({ infantText: ` , ${newVal} Infants` });
        }
      }
    }
    // console.log(that.state);
  }

  render() {
    // console.log(this.state.max);
    return (
      <div>
        <Label>Guests</Label>
        <Gbox onClick={this.clickHandler.bind(this)}>
          {this.state.guests}
          {' '}
          {this.state.noun}
          {this.state.infantText}
        </Gbox>
        <Dropdown
          open={this.state.open}
          click={this.guestHandler.bind(this)}
          nums={this.state}
          close={this.clickHandler.bind(this)}
        />
        <Clear className="clear" />
      </div>
    );
  }
}

export default Guests;

const Label = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.33333em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

const Gbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid;
  border-color: lightgray;
  border-radius: 3px;
  display: grid;
  grid-template-columns: auto 60px auto;
  padding: 12px;
  color: rgb(92, 91, 91);
  font-size: 17px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
`;

const Clear = styled.br`
  clear: both;
`;

import React from 'react';
import styled from 'styled-components';

// const Center = styled.section`
//   text-align: center;
//   font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
//   color: grey;
// `;

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Btn>Reserve</Btn>
        {/* <br /> */}
        <Text>You wont be charged yet</Text>
      </div>
    );
  }
}

export default Button;

const Btn = styled.section`
  background-color: rgb(255, 90, 95) !important;;
  color: white;
  border-radius: 3px;
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px;
  font-weight: 700 !important;
  padding: 15px;
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  line-height: 1.33333em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
  padding: 12px;
`;

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    const { price, rating, reviews } = this.props.price;
    return (
      <Border>
        <div>
          <Pr>
            $
            { price }
            {' '}
          </Pr>
          <Label>per night</Label>
        </div>
        <div>
          <Star>★</Star>
          <Label>{ rating }</Label>
          <Rating>
            (
            {reviews}
            {' '}
            reviews)
          </Rating>
        </div>
        <br />
        <Border />
      </Border>
    );
  }
}

export default Price;

const Border = styled.div`
  border-bottom-style: solid !important;
  border-bottom-width: var(--border-rule-border-width, 1px) !important;
  border-bottom-color: var(--color-divider, #EBEBEB) !important;
  clear: both;
`;

const Pr = styled.span`
  overflow-wrap: break-word !important;
  font-size: 22px;
  font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
  font-weight: 800 !important;
  line-height: 1.44444em !important;
  color: rgb(72, 72, 72) !important;
`;

const Star = styled.span`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.33333em !important;
  color:rgb(39, 142, 136) !important;
  margin: 0px !important;
`;

const Label = styled.span`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.33333em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

const Rating = styled.span`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.33333em !important;
  color: rgb(118, 118, 118) !important;
  margin: 0px !important;
`;

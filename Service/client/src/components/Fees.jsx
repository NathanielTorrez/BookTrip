/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


class Fees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // days: 0,
    };
  }

  render() {
    const {
      price, cleaning, service, tax,
    } = this.props.fees;

    if (this.props.open) {
      const b = this.props.start._d;
      const e = this.props.end._d;
      const start = new Date(`${b.getMonth() + 1}/${b.getDate()}/${b.getFullYear()}`);
      const end = new Date(`${e.getMonth() + 1}/${e.getDate()}/${e.getFullYear()}`);
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      // console.log(nights);
      const total = (price * nights) + cleaning + service + tax;

      return (
        <Format>
          <div>
            <Aleft>
              $
              {price}
              {' '}
              x
              {' '}
              {nights}
              {' '}
              nights
            </Aleft>
            <Aright>
              $
              {price * nights}
            </Aright>
          </div>
          {/* <hr class="clear" /> */}
          <Border>
            <Aleft>
              Cleaning fee
              {' '}
              <Img src="rbi.png" alt="" width="17" height="17" />
            </Aleft>
            <Aright>
              $
              {cleaning}
            </Aright>
          </Border>
          <Border>
            <Aleft>
              Service fee
              {' '}
              <Img src="rbi.png" alt="" width="17" height="17" />
            </Aleft>
            <Aright>
              $
              {service}
            </Aright>
          </Border>
          <Border>
            <Aleft>
              Occupancy taxes and fees
              {' '}
              <Img src="rbi.png" alt="" width="17" height="17" />
            </Aleft>
            <Aright>
              $
              {tax}
            </Aright>
          </Border>
          <Total>
            <Aleft>
              Total
            </Aleft>
            <Aright>
              $
              {total}
            </Aright>
          </Total>
          <Clear />
        </Format>
      );
    }
    return null;
  }
}

export default Fees;

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   height: 20px;
// `;

const Img = styled.img`
  cursor: pointer;
  :hover, :active {
    filter: sepia(100%) hue-rotate(190deg) saturate(500%);
  };
`;

const Clear = styled.div`
  clear: both;
`;

const Border = styled.div`
border-bottom-style: solid !important;
border-bottom-width: var(--border-rule-border-width, 1px) !important;
border-bottom-color: var(--color-divider, #EBEBEB) !important;
clear: both;
`;


const Total = styled.div`
border-bottom-style: solid !important;
border-bottom-width: var(--border-rule-border-width, 1px) !important;
border-bottom-color: var(--color-divider, #EBEBEB) !important;
font-weight: 600 !important;
clear: both;
`;


const Format = styled.div`
  overflow-wrap: break-word !important;
  font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
`;

const Aleft = styled.p`
  float: left;
  margin-top: 3%;
  margin-bottom: 3%;
`;

const Aright = styled.p`
  float: right;
  margin-top: 3%;
  margin-bottom: 3%;
`;

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (this.props.open) {
      return (
        <Dpdn>
          <Grid2>
            <Arrow>←</Arrow>
            <Month>May 2020</Month>
            <Left><Arrow>→</Arrow></Left>
          </Grid2>
          <Days>
            <Dr>
              <Dd>Su</Dd>
              <Dd>Mo</Dd>
              <Dd>Tu</Dd>
              <Dd>We</Dd>
              <Dd>Th</Dd>
              <Dd>Fr</Dd>
              <Dd>Sa</Dd>
            </Dr>
          </Days>
          <Table>
            <Tr>
              <Ed> </Ed>
              <Ed> </Ed>
              <Ed> </Ed>
              <Ed> </Ed>
              <Ed> </Ed>
              <Td>1</Td>
              <Td>2</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>4</Td>
              <Td>5</Td>
              <Td>6</Td>
              <Td>7</Td>
              <Td>8</Td>
              <Td>9</Td>
            </Tr>
            <Tr>
              <Td>10</Td>
              <Td>11</Td>
              <Td>12</Td>
              <Td>13</Td>
              <Td>14</Td>
              <Td>15</Td>
              <Td>16</Td>
            </Tr>
            <Tr>
              <Td>17</Td>
              <Td>18</Td>
              <Td>19</Td>
              <Td>20</Td>
              <Td>21</Td>
              <Td>22</Td>
              <Td>23</Td>
            </Tr>
            <Tr>
              <Td>24</Td>
              <Td>25</Td>
              <Td>26</Td>
              <Td>27</Td>
              <Td>28</Td>
              <Td>29</Td>
              <Td>30</Td>
            </Tr>
            <Tr>
              <Td>31</Td>
              <Ed> </Ed>
              <Ed> </Ed>
              <Ed> </Ed>
              <Ed> </Ed>
              <Ed> </Ed>
              <Ed> </Ed>
            </Tr>
          </Table>
          <Close onClick={this.props.clear}>Clear dates</Close>
        </Dpdn>
      );
    }
    return null;
  }
}


export default Calendar;

const Tr = styled.tr`
  margin: auto;
  text-align: center;
`;

const Table = styled.table`
  border-collapse: collapse !important;
  border-spacing: 0px !important;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
  // width: 100%;
  padding-right: 30px;
  padding-left: 50px;
  // display: block;
  font-size: 13px;
  font-weight: bold;
`;

const Td = styled.td`
  border: 1px solid rgb(172,167,167);
  margin: auto;
  height: 40px;
  width: 41px;
  cursor: pointer;
  :hover, :active {
    background: Gainsboro;
  };
`;
const Ed = styled.td`
  margin: auto;
  height: 40px;
  width: 41px;
`;

const Days = styled.table`
  font-size: 80%;
  color: grey;
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

const Dr = styled.tr`

`;

const Dd = styled.td`
  width: 41px;
`;

const Close = styled.button`
  float: right;
  color: rgb(39, 142, 136);
  margin: 16px;
  cursor: pointer;
  border: none;
  font-size: 16px;
`;

const Dpdn = styled.div`
  text-align: center;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  border: 1px solid;
  background-color: white;
  border-color: #EBEBEB;
  border-radius: 3px !important;
  overflow: hidden;
  margin-bottom: 16px;
  font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  font-weight: 450 !important;
  color: rgb(72, 72, 72) !important;
`;

const Grid2 = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 20px;
`;

const Left = styled.div`
  text-align: right;
`;

const Month = styled.div`
  margin: auto;
  color: rgb(72, 72, 72) !important;
  font-size: 18px !important;
  text-align: center !important;
  font-weight: bold;
`;

const Arrow = styled.button`
  font-size: 15px;
  cursor: pointer !important;
  color: rgb(117, 117, 117) !important;
  border-style: solid !important;
  border-color: rgb(228, 231, 231) !important;
  border-radius: 3px !important;
  padding: 6px 9px !important;
  width: 50px;
  height: 40px;
`;


// const Normal = styled.div`
// eslint-disable-next-line max-len
// font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
//   font-size: 14px !important;
//   font-weight: 340 !important;
//   line-height: 1.28571em !important;
//   color: rgb(72, 72, 72) !important;
//   padding-top: 6px;
// `;

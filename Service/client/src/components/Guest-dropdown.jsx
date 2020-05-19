/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (this.props.open) {
      return (
        <Dpdn>
          <Margin1>
            <Item name="Adults" click={this.props.click} nums={this.props.nums} />
            <Item name="Children" click={this.props.click} nums={this.props.nums} />
            <Item name="Infants" click={this.props.click} nums={this.props.nums} />
          </Margin1>
          <Message>
            {`${this.props.nums.max} `}
            guests maximum. Infants don’t count toward the number of guests.
          </Message>
          <Close onClick={this.props.close}>Close</Close>
        </Dpdn>
      );
    }
    return null;
  }
}

const Item = ({ name, click, nums }) => {
  let text = '';
  if (name === 'Children') {
    text = 'Ages 2–12';
  } else if (name === 'Infants') {
    text = 'Under 2';
  }

  return (
    <Grid>
      <Grid2>
        <Center>{name}</Center>
        <Normal>{text}</Normal>
      </Grid2>
      <Right>
        <Asde onClick={() => { click('-', name); }}>—</Asde>
        <Margin>{nums[name]}</Margin>
        <Asde onClick={() => { click('+', name); }}>＋</Asde>
      </Right>
    </Grid>
  );
};

export default Dropdown;

const Right = styled.div`
  text-align: right;
  margin-right: 15px;
`;

const Close = styled.button`
  float: right;
  color: rgb(39, 142, 136);
  margin: 16px;
  cursor: pointer;
  border: none;
  font-size: 16px;
`;

const Message = styled.div`
  margin: 16px;
  width: 70%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 14px !important;
  font-weight: 340 !important;
  color: rgb(72, 72, 72) !important;
`;

const Dpdn = styled.div`
  width: 357px;
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

const Margin = styled.span`
  margin: 16px;
`;

const Margin1 = styled.span`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Asde = styled.button`
  font-size: 12px;
  font-weight: 800;
  color: rgb(39, 142, 136);
  border: 1px solid;
  border-color: rgb(39, 142, 136);
  border-radius: 50%;
  padding: 10px;
  margin: 5px;
`;

// const Autom = styled.div`
//   margin: auto;
//   text-align: right;
// `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Grid2 = styled.div`
  margin-left: 19px;
  display: grid;
  grid-template-rows: auto auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Center = styled.div`
  margin-left: left 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Normal = styled.div`
  font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
  font-size: 14px !important;
  font-weight: 340 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
  padding-top: 6px;
`;

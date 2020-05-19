/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';
import App from './components/App.jsx';

// const divStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: white;
//   border: 2px solid;
//   border-color: black;
//   border-radius: 7px;
// `;

// const Boxed = styled.section`
//   padding: 2em;
//   background: white;
//   border: 1px solid;
//   border-color: grey;
// `;

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('Breg'));

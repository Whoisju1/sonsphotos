import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: .5px solid black;
  display: grid;
  min-width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Container>
        Sons Photos Homepage
      </Container>
    );
  }
}

export default App;

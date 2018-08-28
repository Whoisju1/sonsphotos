import React from 'react';
import styled from 'styled-components';

const Container = styled.main`

`;

const Main = (props) => (
  <Container>
    {props.children}
  </Container>
);

export default Main;

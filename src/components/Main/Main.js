import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  grid-column: 1/-1;
  grid-row: content-start/content-end;
  border: .05rem solid lightgray;
`;

const Main = (props) => (
  <Container>
    {props.children}
  </Container>
);

export default Main;

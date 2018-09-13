import React from 'react';
import styled from 'styled-components';
import Content from '../Content';

const Container = styled.main`
  grid-column: 1/-1;
  grid-row: 1/-1;
`;

Container.displayName = 'MainContainer';

const Main = () => (
  <Container>
    <Content />
  </Container>
);

export default Main;

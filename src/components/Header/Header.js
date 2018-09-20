import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
  grid-row: header-start/header-end;
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #414141;
  background-color: #263238dc;
  z-index: 2;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

export default Header;

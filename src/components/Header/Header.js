import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  /* color: ${({ theme }) => theme.color.secondary}; */
  border: .1rem solid lightgray;
  grid-row: header-start/header-end;
  grid-column: 1/-1;
`;

const Header = () => (
  <StyledHeader>
    Header
  </StyledHeader>
);

export default Header;

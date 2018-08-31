import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-column: 1/-1;
  grid-row: footer-start/footer-end;
`;

const currentYear = new Date().getFullYear();

const Footer = () => (
  <StyledFooter>
    Sons Photos {currentYear}
  </StyledFooter>
);

export default Footer;

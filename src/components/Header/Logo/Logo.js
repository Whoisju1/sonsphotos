import React from 'react';
import styled from 'styled-components';

const LogoText= styled.div`
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  font-family: 'Cinzel', serif;
  grid-column: 2/3;
  display: grid;
  color: #c8d6e5;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  letter-spacing: .4rem;
  font-size: 150%;
`;

const Logo = () => (
  <LogoText>SonsPhotos.com</LogoText>
);

export default Logo;


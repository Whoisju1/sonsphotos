import React from 'react';
import styled from 'styled-components';

const LogoText= styled.div`
  grid-column: 2/3;
  display: grid;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 150%;
`;

const Logo = () => (
  <LogoText>SonsPhotos.com</LogoText>
);

export default Logo;


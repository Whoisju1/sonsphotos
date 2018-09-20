import React from 'react';
import styled from 'styled-components';

const ComingSoon = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Monoton');
  color: white;
  text-shadow: 8px 9px 14px rgba(0, 0, 0, .6);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 200%;
  text-align: center;
  font-family: 'Monoton', cursive;
  letter-spacing: .3rem;
  line-height: 1.7ex;
  @media screen and (max-width: 570px) {
    font-size: 150%;
  }
  @media screen and (max-width: 400px) {
    font-size: 110%;
  }
`;

const Text = () => (
  <ComingSoon>
    Coming Soon
  </ComingSoon>
);

export default Text;

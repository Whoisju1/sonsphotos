import React from 'react';
import styled from 'styled-components';

const ComingSoon = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Monoton');
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 200%;
  text-align: center;
  font-family: 'Monoton', cursive;
  text-shadow: 5px 5px 15px rgba(0, 0, 0, .3);
  letter-spacing: 1rem;
`;

const Text = () => (
  <ComingSoon>
    Coming Soon
  </ComingSoon>
);

export default Text;

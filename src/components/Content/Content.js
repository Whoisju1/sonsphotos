import React from 'react';
import styled, { keyframes } from 'styled-components';
import Text from '../Text';
import SideImage from '../SideImage';

const backgroundMove = keyframes`
  0% {
    background-position: 10% 10%;
    background-size: 130%;
  }
  100% {
    background-position: 10% 10%;
    background-size: 100%;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  height: 100%;
  font-size: 300%;
  background-image: linear-gradient(to bottom,  #263238d2 0%, #263238 80%, #263238 90%),
    url(${require('../../assets/images/IMG_8752.JPG')});
  @media (max-aspect-ratio: 60/100) {
    animation: none;
    background-size: cover;
  }
  background-size: 100%;
  background-position: 70% 10%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  animation: ${backgroundMove} 18s linear alternate infinite;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5rem 1fr 1fr 10rem;
`;

ContentContainer.displayName = 'ContentContainer';

const Content = () => (
  <ContentContainer>
    <Text />
    <SideImage />
  </ContentContainer>
);

export default Content;

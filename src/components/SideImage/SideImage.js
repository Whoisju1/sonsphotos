import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;
  grid-column: 1/span 4;
  grid-row: 2/span 2;
  background-size: cover;
`;

const Img = styled.img.attrs({
  src: require('../../assets/images/IMG_8751.JPG'),
})`
  grid-column: 1/2;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

const BaseLayerImg = styled(Img)`
  opacity: .4;
  mask-image: radial-gradient(farthest-corner, black 0%, transparent 60%);
  filter: grayscale(100%);
`;

const animate = keyframes`
  0% {
    clip-path: circle(17% at 35% 20%);
    opacity: 1
  }

  50% {
    opacity: 0;
  }
  
  100% {
    clip-path: circle(10% at 45% 60%);
  }
`;

const OverlayImg = styled(Img)`
  animation: ${animate} 2.5s cubic-bezier(0.86, 0, 0.07, 1) infinite alternate;
  filter: grayscale(70%);
`;

const SideImage = () => (
  <Container>
    <BaseLayerImg />
    <OverlayImg />
  </Container>
);

export default SideImage;

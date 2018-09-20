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

const Overlay = styled.div`
  height: 100%;
  grid-column: 1/-1;
  grid-row: 2/-2;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(79,133,187); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(79,133,187,1) 1%, rgba(64,83,150,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(79,133,187,1) 1%,rgba(64,83,150,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(79,133,187,1) 1%,rgba(64,83,150,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4f85bb', endColorstr='#405396',GradientType=1 );
`;

const ContentContainer = styled.div`
  display: grid;
  height: 100%;
  font-size: 300%;
  -ms-filter: blur(80%);
  background-image: url(${require('../../assets/images/IMG_8752.JPG')});
  @supports (background-image: linear-gradient(to bottom,  #263238d2 0%, #263238 80%, #263238 90%),
    url(${require('../../assets/images/IMG_8752.JPG')})) {
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
  }
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5rem 1fr 1fr 10rem;
`;

ContentContainer.displayName = 'ContentContainer';

const Content = () => (
  <ContentContainer>
    <Overlay />
    <Text />
    <SideImage />
  </ContentContainer>
);

export default Content;

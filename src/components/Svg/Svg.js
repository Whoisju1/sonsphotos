import React from 'react';
import styled from 'styled-components';

const SvgContainer = styled.div`
  grid-column: 1/-1;
  grid-row: header-end/page-bottom;
  border: 1px solid white;
`;

const ComingSoonText = styled.text.attrs({
  x: '50%',
  id: 'text',
})`
  @import url('https://fonts.googleapis.com/css?family=Monoton');
  font-size: 400%;
  word-spacing: .6em;
  text-anchor: middle;
  font-family: 'Monoton', cursive;
  text-shadow: 5px 5px 14px rgba(0, 0, 0, .3);
`;

const Svg = () => (
  <SvgContainer>
    <defs>
      <linearGradient id="grad" x1="10%" x2="0%" y1="0%" y2="100%">
        <stop offset='0%' stop-color="#3c6382" style={{ stopOpacity: 0.5 }} />
        <stop offset='40%' stop-color="#3c6382" />
      </linearGradient>
    </defs>
      <rect y="0" x="0" height="100%" width="100%" style={{fill: 'url(#grad)'}} />
      <ComingSoonText y="25%">Coming Soon</ComingSoonText>
  </SvgContainer>
);

export default Svg;

import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

const StyledFooter = styled.footer`
  display: grid;
  grid-column: 1/-1;
  color: #fff;
  background-color: ${transparentize('0.8', '#2f3640')};
  grid-row: footer-start/footer-end;
  grid-template-columns: 1fr repeat(2, min-content) 1fr;
  grid-gap: 4rem;
`;

const Link = styled.a.attrs({
  target: '_blank', 
})`
  &, &:link, &:active, &:visited {
    text-decoration: none;
    display: inline-block;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

const SVG = styled.svg.attrs({
  height: '36%',
  width: '4rem',
})`
  &:hover {
    .outline {
      stroke: ${({strokeColor}) => strokeColor};
    }
  }
  .outline {
    stroke: white;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Link style={{ gridColumn: '2/3'}} href="https://www.facebook.com/Sonsphotos" title="Facebook">
      <SVG strokeColor="#3B5998">
        <g class="outline">
          <g>
            <path d="M15.945,32.001l-4-7.373H3.359V-0.001h25.281v24.629h-8.695L15.945,32.001z M4.359,23.628h8.18l3.405,6.275l3.405-6.275    h8.291V0.999H4.359V23.628z" />
          </g>
          <g>
            <path fill="none" d="M14.143,19.486H17.1v-7.173h1.973l0.261-2.471H17.1l0.003-1.237c0-0.644,0.061-0.99,0.984-0.99h1.233V5.142h-1.974    c-2.37,0-3.205,1.199-3.205,3.215v1.484h-1.478v2.472h1.478V19.486z" />
          </g>
        </g>
      </SVG>
    </Link>
    <Link style={{ gridColumn: '3/4'}} href="https://instagram.com/officialsonsphotos" title="Instagram">
      <SVG SVG strokeColor="rgba(242,235,185,1)">
        <g class="outline">
          <path fill="none" d="M15.944,32.002l-4-7.373H3.359V0H28.64v24.629h-8.695L15.944,32.002z M4.359,23.629h8.181l3.404,6.275l3.405-6.275h8.291V1   H4.359V23.629z" />
        </g>
        <g class="outline">
          <path fill="none" d="M21.431,5.03H10.569c-1.022,0-1.811,0.789-1.811,1.814v10.884c0,1.023,0.788,1.814,1.811,1.814h10.862   c1.022,0,1.811-0.79,1.811-1.814V6.843C23.242,5.819,22.453,5.03,21.431,5.03z M16.011,9.435c1.606,0,2.908,1.264,2.908,2.824   c0,1.559-1.302,2.824-2.908,2.824c-1.605,0-2.907-1.265-2.907-2.824C13.104,10.699,14.405,9.435,16.011,9.435z M21.431,17.274   c0,0.318-0.136,0.453-0.452,0.453h-9.957c-0.317,0-0.452-0.136-0.452-0.453v-6.348l1.128,0.246   c-0.121,0.394-0.186,0.812-0.186,1.245c0,2.411,2.016,4.369,4.5,4.369c2.486,0,4.501-1.957,4.501-4.369   c0-0.433-0.066-0.851-0.186-1.245l1.106-0.246V17.274z M21.431,9.111c0,0.251-0.202,0.453-0.452,0.453h-1.811   c-0.25,0-0.452-0.202-0.452-0.453V7.297c0-0.251,0.202-0.453,0.452-0.453h1.811c0.25,0,0.452,0.202,0.452,0.453V9.111z" />
        </g>
      </SVG>
    </Link>
  </StyledFooter>
);

export default Footer;

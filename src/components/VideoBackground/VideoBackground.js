import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -4;
`;

const VideoBackground = () => (
  <Video autoPlay loop muted>
    <source src={require("../../assets/videos/MP4/Fishermans-Village.mp4")} type="video/mp4"/>
    <source src={require("../../assets/videos/WEBM/Fishermans-Village.webm")} type="video/ogv"/>
  </Video>
);

export default VideoBackground;

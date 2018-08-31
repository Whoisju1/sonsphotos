import React, { Component } from 'react';
import Main from "./components/Main";
import Header from './components/Header';
import Footer from './components/Footer';
import reset from 'styled-reset';
import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal`
  ${reset}
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  #root {
    box-sizing: border-box;
    display: grid;
    min-height: 100vh;
    min-width: 100vw;
    font-size: 1.6rem;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: [header-start]10rem [header-end content-start]auto[content-end footer-start] 20rem[footer-end]; 
  }
`;

const theme = {
  color: {
    primary: '#ff4d4d',
  }
};

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
              <Header />
              <Main>
                Some Content
              </Main>
              <Footer />
          </React.Fragment>
        </ThemeProvider>
    );
  }
}

export default App;

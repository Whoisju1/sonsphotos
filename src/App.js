import React, { Component } from 'react';
import Main from "./components/Main";
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal`

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

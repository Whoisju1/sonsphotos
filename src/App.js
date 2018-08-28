import React, { Component } from 'react';
import styled from 'styled-components';
import Main from "./components/Main";
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          Some Content
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

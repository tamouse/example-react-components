import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import { App, AppHeader, AppIntro, AppLogo, AppTitle } from './styles'

export class MainApp extends Component {
  render() {
    return (
      <App>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </App>
    );
  }
}

export default MainApp;

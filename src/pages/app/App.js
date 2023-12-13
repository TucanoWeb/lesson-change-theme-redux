import React from 'react';
import logo from './logo.svg';
import { Counter } from '../../components/counter/Counter';
import './App.css';

import {
  AppStyle,
  AppHeader,
  AppLink,
  AppLogo,
  AppLogoFloat
} from "./styles"

import ButtonTheme from '../login';

//reducer
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/themeSlice';

const App = () => {

  const theme = useSelector(selectTheme)

  return (
    <AppStyle
      theme={theme}
    >
      <AppHeader>
        <AppLogo
          src={logo}
          alt='Logotipo'
        />
        <Counter />
        <ButtonTheme />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </AppHeader>
    </AppStyle >

  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewPost } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addNewPost={addNewPost} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let PostsData = [
  { id: 1, like: 1, post: 'my first post1' },
  { id: 2, like: 2, post: 'my first post2' },
  { id: 3, like: 3, post: 'my first post2' },
  { id: 4, like: 4, post: 'my first post4' },
  { id: 5, like: 5, post: 'my first post5' },
  { id: 6, like: 6, post: 'my first post6' },
];
let DialogsData = [
  { id: 1, name: 'Igor' },
  { id: 2, name: 'any user1' },
  { id: 3, name: 'any user2' },
  { id: 4, name: 'any user3' },
  { id: 5, name: 'any user4' },
  { id: 6, name: 'any user5' },
];
let MessageData = [
  { id: 0, message: ' hello Igor' },
  { id: 1, message: 'any message1' },
  { id: 2, message: 'any message2' },
  { id: 3, message: 'any message3' },
  { id: 4, message: 'any message4' },
  { id: 5, message: 'any message5' },
];
ReactDOM.render(
  <React.StrictMode>
    <App
      PostsData={PostsData}
      MessageData={MessageData}
      DialogsData={DialogsData}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

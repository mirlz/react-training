import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

function formatYeName(yeName) {
    return yeName.firstName + ' ' + yeName.lastName;
  }
  
  const user = { 
    firstName: 'My holy first name',
    lastName: '& last name'
  };
  
  const element = (
    <h1>
      Hello, {formatYeName(user)}!
    </h1>
  );
  
  ReactDOM.render(
    element, 
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
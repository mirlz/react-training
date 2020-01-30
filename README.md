# Pure ReactJS

## Installations

- [NodeJS](https://nodejs.org/en/)
- [Microsoft Visual Studio Code](https://code.visualstudio.com/)
- [Git bash](https://git-scm.com/downloads)

## create-react-app

- [Github](https://github.com/facebook/create-react-app)

```bash
npx create-react-app [project name]
cd [project name]
npm start
```

### File Directory

```basic
node_modules
public
src
   | - App.js
   | - index.css
   | - index.js
   | - serviceWorker.js
package.json
package-lock.json
README.md
```

#### index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//importing App component from /.App file
import App from './App';
import * as serviceWorker from './serviceWorker';

//rendering <App /> component, so this is what will be rendered when we run npm run start
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

#### App.js

```jsx
import React from 'react'; //must include for all react js files
import logo from './logo.svg'; //importing image as component
import './App.css';

function App() {
  return (
    //edit everything from here to customize your page 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

## Hello World

From this point on, use the index.js file. 

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

This will display a heading saying "Hello, world!" on the page. 

## Introducing JSX

```jsx
const elment = <h1>Hello, world</h1>
```

This line is neither a string nor HTML.
It's JSX, and it is a syntax extension to JavaScript.

#### Embedding Expressions in JSX

```jsx
const name = 'Lalaland';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

You can put any valid Javascript espression inside the curly braces in JSX. For example, `2+2`, `user.firstName` or `formatYeName(yeName)`.

```jsx
function formatYeName(yeName) {
  return yeName.firstName + ' ' + yeName.lastName;
}

const user = { 
  firstName: 'My holy first name',
  lastName: '& last name'
};

const element = {
  <h1>
    Hello, {formatYeName(user)}!
  </h1>
};

ReactDOM.render(
  element, 
  document.getElementById('root')
);
```

#### Specifying Attributes with JSX

Specifying string literals as attributes:

`const element = <div tabIndex="0"></div>;`

Embedding Javascript expression in an attribute

`const element = <img src={user.avatarUrl}></img>;`

Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
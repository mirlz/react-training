# Pure ReactJS

## Installations

- [NodeJS](https://nodejs.org/en/)
- [Microsoft Visual Studio Code](https://code.visualstudio.com/)
- [Git bash](https://git-scm.com/downloads)

## create-react-app

- [Github](https://github.com/facebook/create-react-app)

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

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
├── App.js
├── index.css
├── index.js
├── serviceWorker.js
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

---

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

### Embedding Expressions in JSX

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

### Specifying Attributes with JSX

Specifying string literals as attributes:

`const element = <div tabIndex="0"></div>;`

Embedding Javascript expression in an attribute

`const element = <img src={user.avatarUrl}></img>;`

Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

--- 

## Rendering Elements

> Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:

`const element = <h1>Hello, world</h1>;`
Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

> One might confuse elements with a more widely known concept of “components”. We will introduce components in the next section. Elements are what components are “made of”.

### Rendering an Element into the DOM

`<div id="root"></div>`

We call this a “root” DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

### Updating the Rendered Element

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

So far, the only way to update the UI is to create a new element, and pass it to `ReactDOM.render()`.

```jsx
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

It calls `ReactDOM.render()` every second from a `setInterval()` callback.

> In practice, most React apps only call ReactDOM.render() once. 

### React only Updates what's Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

![React only updates what is necessary](readme-img/renderingDomUpdates.gif)

---

## Components and Props

> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 

### Functional and Class Components

#### Functional Component

```jsx
const Button = (props) => {
  return (
    <button>{props.text}</button>
  )
}
```

#### Class Component

```jsx
class App extends Component {
  state = {count: 1};
  render() {
    <div> ... </div>
  }
}
```

### Rendering Components

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

1. We call `ReactDOM.render()` with the `<Welcome name="Sara" />` element.
2. React calls the Welcome component with `{name: 'Sara'}` as the props.
3. Our Welcome component returns a `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.

> **Note**: Always start component names with a capital letter.
>
> React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope.
console.log("App.js is running!");

// JSX - Javascript XML

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// Create a templateTwo var JSX Expression.
// div
// h1 -> Your name
// p -> Age:
// p -> Location
// RenderTwo instead of Template

var templateTwo = (
  <div>
      <h1>One Angry Grizzly Bear</h1>
      <p>29</p>
      <p>Somewhere in the desert of Nevada</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
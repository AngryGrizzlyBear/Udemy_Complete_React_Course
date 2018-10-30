console.log("App.js is running!");

// JSX - Javascript XML

// create app object title/subtitle
// user title/subtitle in the template
// render template

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
var user = {
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia',
}

var templateTwo = (
  <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>{user.location}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
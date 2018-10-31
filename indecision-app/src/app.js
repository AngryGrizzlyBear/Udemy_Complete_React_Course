console.log("App.js is running!");

// JSX - Javascript XML

// Going to use
// if statements
// ternary operators
// logical and operator

// create app object title/subtitle
// user title/subtitle in the template
// render template


// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options."

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['One', 'Two'],
};

// This works too.
// function getSubtitle(subtitle) {
//     if (subtitle) {
//         return <p>{subtitle}</p>;
//     }
// }
// getSubtitle(app.subtitle)

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options."  : "No options."}</p>
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

const user = {
    name: 'Andrew',
    age: 19,
    location: 'Philadelphia',
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
  <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
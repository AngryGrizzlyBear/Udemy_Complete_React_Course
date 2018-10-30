'use strict';

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

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['One', 'Two']
};

// This works too.
// function getSubtitle(subtitle) {
//     if (subtitle) {
//         return <p>{subtitle}</p>;
//     }
// }
// getSubtitle(app.subtitle)

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options." : "No options."
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// Create a templateTwo var JSX Expression.
// div
// h1 -> Your name
// p -> Age:
// p -> Location
// RenderTwo instead of Template

var user = {
    name: 'Andrew',
    age: 19,
    location: 'Philadelphia'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

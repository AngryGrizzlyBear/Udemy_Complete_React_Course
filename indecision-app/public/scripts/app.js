'use strict';

console.log("App.js is running!");

// JSX - Javascript XML

// create app object title/subtitle
// user title/subtitle in the template
// render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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
    age: 26,
    location: 'Philadelphia'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

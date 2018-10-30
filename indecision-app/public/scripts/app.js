"use strict";

console.log("App.js is running!");

// JSX - Javascript XML

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

// Create a templateTwo var JSX Expression.
// div
// h1 -> Your name
// p -> Age:
// p -> Location
// RenderTwo instead of Template

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "One Angry Grizzly Bear"
    ),
    React.createElement(
        "p",
        null,
        "29"
    ),
    React.createElement(
        "p",
        null,
        "Somewhere in the desert of Nevada"
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

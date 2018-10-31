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


// This works too.
// function getSubtitle(subtitle) {
//     if (subtitle) {
//         return <p>{subtitle}</p>;
//     }
// }
// getSubtitle(app.subtitle)

// Great Example
// // Create a templateTwo var JSX Expression.
// // div
// // h1 -> Your name
// // p -> Age:
// // p -> Location
// // RenderTwo instead of Template
//
// const user = {
//     name: 'Andrew',
//     age: 19,
//     location: 'Philadelphia',
// };
//
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }
//
// const templateTwo = (
//   <div>
//       <h1>{user.name ? user.name : 'Anonymous'}</h1>
//       {(user.age >= 18) && <p>Age: {user.age}</p>}
//       {getLocation(user.location)}
//   </div>
// );

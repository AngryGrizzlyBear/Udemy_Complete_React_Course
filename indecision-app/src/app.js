console.log("App.js is running!");


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['One', 'Two'],
};

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

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    // subtract -1 from count - rerender
    count--;
    renderCounterApp();
};

const reset = () => {
    // set count to 0 a rerender
    count = 0;
    renderCounterApp();
};



// Challenge
// Make a button "-1" - setup minusOne and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

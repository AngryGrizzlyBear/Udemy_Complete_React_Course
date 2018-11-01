

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

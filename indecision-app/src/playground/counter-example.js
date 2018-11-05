class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
          count: 0
        };
    }
    handleAddOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne () {
// Call this.setState decrement the count by one
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() =>{
            return {
                count: 0
            }
        })
    }
    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// create three methods: handleAddOne, handleMinusOne, handleReset
// use console.log print the handle name.
// wire up on click for all 3 buttons, bind in the constructor function.

//
//
// let count = 0;
//
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     // subtract -1 from count - rerender
//     count--;
//     renderCounterApp();
// };
//
// const reset = () => {
//     // set count to 0 a rerender
//     count = 0;
//     renderCounterApp();
// };
//
//
//
// // Challenge
// // Make a button "-1" - setup minusOne and register - log "minusOne"
// // Make reset button "reset" - setup reset function - log "reset"
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();

// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     },
// };
//
// const getName = obj.getName.bind(obj);
//
// console.log(getName())
// Bookmarked

// Hoping to get to this today.
// 11-8-2018 Sick. :/

 class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing four']
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    // HandleDeleteOptions
// handlePick - pass down to Action and setup onClick- bind here
// randomly pick an option and alert it
     handlePick() {
         const randomNum = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[randomNum];
         alert(option)
     }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >What should I do?
                </button>
            </div>
        );
    }
}

// Setup options prop for Options component
// Render the length  of the array.

// Render new p tag for each option (set text, set key.)

// Add Remove all button
// Setup handleRemoveAll -> alert some message.
// setup onClick to fire the method

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
               Option: {this.props.optionText}
            </div>
        );
    }
}

// Setup the form with the text input and submit button
// Wire up onSubmit
// handleAddOption -> fetch the value typed -> if value ,then alert.


class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// Option -> Option component here.

// Create an Options Class. Options -> Components here.
// AddOption Component -> AddOption component here.

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
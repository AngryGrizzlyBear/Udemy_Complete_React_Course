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
// Stateless functional component
 class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    handleDeleteOptions() {
        this.setState(() => ({options: [] }));
    }
    handleDeleteOption(optionToRemove) {
       this.setState((prevState) => ({
           options: prevState.options.filter((option) => optionToRemove !== option)
       }));
    }
    // HandleDeleteOptions
// handlePick - pass down to Action and setup onClick- bind here
// randomly pick an option and alert it
     handlePick() {
         const randomNum = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[randomNum];
         alert(option)
     }
     handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }

         this.setState((prevState) => ({options: prevState.options.concat(option)}));
     }


    render() {
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle &&  <h2>{props.subtitle}</h2>}
        </div>
    );
}

IndecisionApp.defaultProps = {
    options: []
}

Header.defaultProps = {
    title: 'Indecision'
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}
            >What should I do?
            </button>
        </div>
    );

}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// Setup options prop for Options component
// Render the length  of the array.

// Render new p tag for each option (set text, set key.)

// Add Remove all button
// Setup handleRemoveAll -> alert some message.
// setup onClick to fire the method

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}
//
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
}
//
// class Option extends React.Component {
//     render () {
//         return (
//             <div>
//                Option: {this.props.optionText}
//             </div>
//         );
//     }
// }

// Setup the form with the text input and submit button
// Wire up onSubmit
// handleAddOption -> fetch the value typed -> if value ,then alert.


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
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

// const User = (props) => {
//     return (
//         <div>
//             <p>name: {props.name} </p>
//             <p>Age: {props.age} </p>
//         </div>
//     );
// };


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
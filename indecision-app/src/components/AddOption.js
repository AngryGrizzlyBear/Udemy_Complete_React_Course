import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
        // this.state = {
        //     error: undefined
        // };
    // }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type='text' name='option' />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

// Option -> Option components here.

// Create an Options Class. Options -> Components here.
// AddOption Component -> AddOption components here.

// const User = (props) => {
//     return (
//         <div>
//             <p>name: {props.name} </p>
//             <p>Age: {props.age} </p>
//         </div>
//     );
// };
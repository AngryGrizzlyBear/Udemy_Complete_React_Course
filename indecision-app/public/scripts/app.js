'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
        // HandleDeleteOptions
        // handlePick - pass down to Action and setup onClick- bind here
        // randomly pick an option and alert it

    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists.';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer.';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

IndecisionApp.defaultProps = {
    options: []
};

Header.defaultProps = {
    title: 'Indecision'

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

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};
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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optionText
    );
};
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


var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

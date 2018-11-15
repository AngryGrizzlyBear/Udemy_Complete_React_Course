import React from 'react';

const Option = (props) =>  (
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


export default Option;
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

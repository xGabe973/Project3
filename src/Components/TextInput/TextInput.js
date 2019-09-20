import React from 'react';
import './style.css';
class TextInput extends React.Component {
    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({ value : inputValue });
        this.props.onChange(inputValue);
    };
    constructor(props) {
        super(props);
        this.state = { value : '' };
        // binding of 'this' in our constructor to our method handleChange is necessary for 'this' to work in handleChange method
        this.handleChange = this.handleChange.bind(this);
    };
    weightChanged(weightValue) {
        this.setState({ weight : weightValue });
    }
    
    heightChanged(heightValue) {
        this.setState({ height:  heightValue });
    }
    
    render() {
        return(
            <div>
                <label>{ this.props.label }</label>
                <input type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange} />
            </div>
        )
    }
}

export default TextInput;
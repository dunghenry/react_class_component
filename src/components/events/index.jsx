import React from 'react';
class Events extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    handleClick = () => {
        alert('Click');
    }
    handleClickE = (value, event) => {
        console.log(value);
        console.log(event);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={(e) => this.handleClickE("value", e)}>Click me!</button>
            </div>
        );
    }
}

export default Events;
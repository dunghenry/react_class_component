import React from 'react';
class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dung',
            age: 22
        }
    }
    handleChange = (e) =>{
        this.setState({name: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>State Component</h1>
                <p>{this.state.name}</p>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default State;
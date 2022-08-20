import React from 'react';
class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const { id, name, model, color } = this.props;
        return (
            <div>
               <h2>Model : {model}</h2>
               <p>Name : {name}</p>
               <p>Color : {color}</p>
               <br></br>
            </div>
        );
    }
}

export default Car;
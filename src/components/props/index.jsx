import React from 'react';
class Props extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        favoritecolor: "red"
    }

    //default sate.favoritecolor = black(component mounted and updated)
    static getDerivedStateFromProps(props) {
        return { favoritecolor: props.favcol }
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </div>
        );
    }
}

export default Props;
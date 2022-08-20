import { Component, memo } from 'react'
class ChildComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        console.log("Render")
        return (
            <>
                <p>{this.props.count}</p>
            </>
        );
    }
}

export default memo(ChildComponent);
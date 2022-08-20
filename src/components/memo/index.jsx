import { Component } from 'react'
import ChildComponent from './ChildComponent';
class Memo extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 0,
    }
    handleCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={this.handleCount}>increment</button>
                <ChildComponent count={this.state.count}/>
            </>
        );
    }
}

export default Memo;
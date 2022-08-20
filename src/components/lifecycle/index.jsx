import React from 'react'
import axios from 'axios';
class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            color: "red",
            isShow: true,
        }
    }
    handleClick = () => {
        this.setState({ isShow: false });
    }
    //No allow updates
    // shouldComponentUpdate(){
    //     return false;
    // }

    //Allow updates
    // shouldComponentUpdate() {
    //     return true;
    // }
    componentDidMount() {
        const fetchTodos = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
                if (res.status === 200) {
                    this.setState({ todos: res.data })
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchTodos();

        setTimeout(() => {
            this.setState({ color: "yellow" })
        }, 1000)

    }
    getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.color;
        return {}
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.color;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.color}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                {this.state.isShow && <Child />}
                <button onClick={this.handleClick}>Delete Child</button>
            </div>
        );
    }
}

export default Lifecycle;

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Child Component!</h1>
        );
    }
}
import { Component } from 'react';
import './style.css'
import './app.scss'
import styles from './main.module.css'
class Styling extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    render() {
        return (
            <>
                <h1 style={{ color: "red" }}>Hello Style!</h1>
                <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
                <h1 style={this.myStyle}>Hi</h1>
                <h1 className={styles.bigblue}>Hello</h1>
                <h1 className="h1">Hello</h1>
            </>
        );
    }
}

export default Styling;
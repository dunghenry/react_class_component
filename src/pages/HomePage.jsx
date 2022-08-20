import React from 'react';
import Memo from '../components/memo';
import Styling from '../components/styling';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <>
                <h1>Home Page</h1>
                {/* <Memo/> */}
                <Styling/>
            </>
        );
    }
}
 
export default HomePage;
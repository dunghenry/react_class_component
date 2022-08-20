import React from 'react';
class Forms extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: '',
        email: '',
        hobby: '',
        car: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.state.car = ''
        this.state.email = ''
        this.state.name = ''
        this.state.hobby = ''
    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Hobby: </label>
                        <textarea value={this.state.hobby} name="hobby" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Car :</label>
                        <select name="car" defaultValue={'DEFAULT'} onChange={this.onChange}>
                            <option value="DEFAULT" disabled>Choose ...</option>
                            <option value="Ford">Ford</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Fiat">Fiat</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms;
import React, { Component } from 'react';


class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "",
                        age: "",
                        feeling: "",
                        person: ""}
    }

    nameChange = (event) => {
        this.setState({name: event.target.value});
    }

    ageChange = (event) => {
        this.setState({age: event.target.value});
    }

    feelingChange = (event) => {
        this.setState({feeling: event.target.value});
    }

    submitFunction = (event) => {
        this.setState({person:( "Hello " + this.state.name + "." + " Your age is: " + this.state.age + ", and you are feeling " + this.state.feeling)})
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitFunction}>
                    <h1>Person Stats</h1>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={this.state.name} onChange={this.nameChange}/>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" value={this.state.age} onChange={this.ageChange}/>
                    <label htmlFor="feeling">Feeling: </label>
                    <input type="text" id="feeling" value={this.state.feeling} onChange={this.feelingChange}/>
                    <button>Submit</button>
                    <p>{this.state.person}</p>
                </form>
            </div>
    );
    }
}

export default PersonStats;

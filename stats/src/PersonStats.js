import React, { Component } from 'react';


class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "",
                        age: "",
                        feeling: ""}
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
        console.log("Submitted Form");
        alert("Hello")
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
                </form>
            </div>
    );
    }
}

export default PersonStats;

// Make sure to create a new variable in your state under your constructor. Afterwards, assign a string using all of your other states in your submit funciton. Lastly, call that new function above your submit button to complete the classwork.

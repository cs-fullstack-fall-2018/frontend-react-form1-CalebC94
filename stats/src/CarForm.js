import React, {Component} from 'react'

class CarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "",
            make: "",
            model: ""
    }

}

yearLabelChange = (event) =>
{
    this.setState({year: event.target.value});
}

submitFunction = (event) =>
{
    // this.state.model += 1;

    this.setState ({model: this.state.model+1})

    console.log(this.state.model);
    event.preventDefault();
}
    render()
    {
        return(
            <div>
                <h1>Cars</h1>
                <form onSubmit={this.submitFunction}>
                    <label htmlFor="yearLabel">Year: </label>
                    <input type="text" id="yearLabel"/>
                    <br/>

                    <label htmlFor="makeLabel">Make: </label>
                    <input type="text" id="makeLabel"/>
                    <br/>

                    <label htmlFor="modelLabel">Model: </label>
                    <input type="text" id="modelLabel"/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default CarForm;
import React, { Component } from 'react';

class AdoptionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            birthday: '01/02/14'
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault()
        console.log(this.state);
        this.setState({name: ''})
    }

    render() {
        return (<div>
            <h1>Adoption Form</h1>
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <input value={this.state.name} onChange={(e) => this.handleNameChange(e)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>)
    }
}

export default AdoptionForm;
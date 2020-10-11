import React, { Component } from 'react'

export default class AddMovie extends Component {
    constructor(){
        super();
        this.state={
            input:''
        }
    }

    handleChange=(e)=>this.setState({input:e.target.value})
    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange} />
                <span>{this.state.input}</span>
            </div>
        )
    }
}



import React, { Component } from 'react'

export default class AddMovie extends Component {
    constructor(){
        super();
        this.state={
            title:"",
            description:"",
            posterUrl:""
        }
        input:""
    }
    handleChange=(e)=>this.setState({input:e.target.value})
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


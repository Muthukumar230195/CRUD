import React, { Component } from 'react'

export class textcmp extends Component {    
    render() {
        return (
            <div className="textcmp">
            <input type="text" name="FirstName" placeholder="FirstName"></input>
            <input type="text" name="LastName" placeholder="LastName"></input>
            <button onClick={this.addusers}>Add</button> 
            </div>
        )
    }
}

export default textcmp

import React, { Component } from 'react'


export class inputfield extends Component {
constructor(props){
    super(props);
    this.state={
        List:[{FirstName:"MuthuKumar",LastName:"K"},
        {FirstName:"Suresh",LastName:"K"}]
    }
}
renderTableData() {
    return this.state.List.map((List, index) => {
       const { FirstName,LastName } = List //destructuring
       return (
          <tr>
             <td>{FirstName}</td>
             <td>{LastName}</td>             
          </tr>
       )
    })
 }

    render() {
        return (
       <div className="inputfield">
       
       <div>
       <table>
       <th><tr><td>FirstName</td><td>LastName</td></tr></th>
       <tbody>
       {this.renderTableData()}
        </tbody>
       </table>
       </div>
      </div>
        )
    }
}

export default inputfield

import React, {Component} from 'react';

import "../styles/Pilot.css"

export default class Pilot extends Component {

  constructor(){
    super();
    this.state ={
      name: ''
    }
  }
  _handleFormSubmit = (event) =>{
    event.preventDefault();
    this.props.nameChange(this.state.name)
    this.setState({name:""})
  }

  _handleChange = (event) =>{
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div className="card text-center pilot-card">
        <h4 className="card-title pilot-title">What is your name, pilot?</h4>
        <form className="form-group col-md-3" onSubmit={this._handleFormSubmit}>
          <input className="form-control" value={this.state.name} type="text" name="name" placeholder="Pilot Name?" onChange={this._handleChange}></input>
          <button type="submit" className="btn btn-primary pilot-button">Submit</button>
        </form>
        <h3>{this.props.pilot}</h3>
      </div>
    )
  }
}

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//     this.state = {
//       name: ''
//     };
//   }
//   handleNameChange(event) {
//     this.setState({name: event.target.value});
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     alert('Thank you, ' + this.state.name + ' your name was submitted');
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Your Name:
//           <input onChange={this.handleNameChange} name="pilot" type="text" value={this.state.pilot}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     )
//   }
// }

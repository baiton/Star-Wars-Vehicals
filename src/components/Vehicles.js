import React, {Component} from 'react';

export default class Vehicles extends Component {

  render() {
    return (

      <div className="card col-md-3 vehicle">
        <div className="card-block">
          <h4 className="card-title">Vehicle: {this.props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">Model: {this.props.model}</h6>
          <ul className="list-group">
            <li className="list-group-item">Specs</li>
            <li className="list-group-item">Manufacurer: {this.props.manufacturer}</li>
            <li className="list-group-item">Class: {this.props.vehicleClass}</li>
            <li className="list-group-item">Passengers: {this.props.passengers}</li>
            <li className="list-group-item">Crew: {this.props.crew}</li>
            <li className="list-group-item">Length: {this.props.length}</li>
            <li className="list-group-item">Max Speed: {this.props.maxSpeed}</li>
            <li className="list-group-item">Cargo Capacity: {this.props.cargoCapacity}</li>
          </ul>
        </div>
      </div>
    )
  }
}

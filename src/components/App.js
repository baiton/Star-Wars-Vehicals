import React, {Component} from 'react';
import '../styles/App.css';

import Pilot from "./Pilot";
import Vehicles from "./Vehicles"
import getVehicles from "../services";

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor() {
    super();
    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  _handleNameChange = (pilot) => {
    this.setState({pilot: pilot})
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  updateVehicles = () => {
    getVehicles().then((response) => {
      this.setState({vehicles: response.data.results})
    })
  }
  componentDidMount() {
    this.updateVehicles()
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Star Wars</h1>
            <hr className="my-4"></hr>
            <p className="lead">The Vehicles of Star Wars</p>
          </div>
        </div>
        <Pilot pilot={this.state.pilot} nameChange={this._handleNameChange}/>
        <div className="vehicles-container">
        {this.state.vehicles.map((vehicleInfo) => {
          return(
        <Vehicles
          key={vehicleInfo.name}
          name={vehicleInfo.name}
          model={vehicleInfo.model}
          manufacturer={vehicleInfo.manufacturer}
          vehicleClass={vehicleInfo.vehicle_class}
          passengers={vehicleInfo.passengers}
          crew={vehicleInfo.crew}
          length={vehicleInfo.length}
          maxSpeed={vehicleInfo.max_atmosphering_speed}
          cargoCapacity={vehicleInfo.cargo_capacity}
         />
          )
        })}
        </div>
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
      </div>
    );
  }
}

export default App;

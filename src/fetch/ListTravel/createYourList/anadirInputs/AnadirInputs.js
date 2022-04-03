import { Component, useState } from "react";
class AddAll extends Component {
  
  constructor(props){
    super(props);
    this.dataBase = {
      title: "Titulo",
      days: [
      {
        Day: "",
        destinations: [
          {
            destination: "",
            places: [
              {
                name: "",
                description: ""
              }
            ]
          }
        ]
      }]
    }
  }
  
  render(){
    return (
      <p> Hola {this.dataBase.title}</p>
    );
  }

  addTitle(title) {
    this.dataBase.title = title
    console.log(this.dataBase)
    return this.dataBase
  }

  addDay() {
      
  }

  addDestinationsDay() {
      
  }

  addPlacesVisitDay() {
      
  }

  addDescriptionPlaces() {
      
  }
}

export default AddAll;

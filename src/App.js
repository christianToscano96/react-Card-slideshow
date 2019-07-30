import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'
import logo from './assets/logo.svg';

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {property, properties} = this.state;
    return (
      <div className="App">

        <button 
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button>
        <button 
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>

        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Image slideshow React tutorial.</h1>
            </section>

          <div className="cards-slider">
            <div className="cards-slider-wrapper">
              {
                properties.map(property => <Card key={property._id} property={property} />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

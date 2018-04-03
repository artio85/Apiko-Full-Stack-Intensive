import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Dropdown from './Components/firstComponemt/Dropdown.js'
//import Header from './Components/Header/Header.js'
import Main from './Components/Main/Main.js'
import Footer from './Components/Footer/Footer.js'
import data from './File/json/data.json'
import './App.css'

Main.propTypes = {
  //items: PropTypes.array.isRequired,
  items: PropTypes.array,
};

class App extends Component {

  render() {
    //console.log(data);
    return (
      <div className="App">
        <Main items={ data }/>
        <Footer />
      </div>
    );
  }
}

export default App;

/*
render() {
  //console.log(data);
  return (
    <div className="App">
      <Header />
      <Main items={ data }/>
      <Footer />
    </div>
  );
}
}
*/

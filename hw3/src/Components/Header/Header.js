import React, { Component } from 'react';
import App from './../../App.css'

const Search = (props) => (
  <div>
    <p>List of coments</p>
    <lable>
    <input type='search'/>
    </lable>
    <button>Search</button>
  </div>
);

class Header extends Component {
  constructor(props){
    super(props);

  }
render() {
  return (
    <div className="App-header">
      <Search />
    </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import App from './../../App.css'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      index : 10,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment (){
    let temp = this.state.index ;
    if(temp <= this.props.items.length){
      this.setState({index: this.state.index + 10});
      for (var i = temp - 10; i < this.state.index; i++) {
        this.state.items.push(this.props.items[i]);
      }
    }
  }

  decrement (){
    let temp = this.state.index ;
    if(temp >= 20){
      this.setState({index: this.state.index - 10});
      for (var i = 0; i < 10; i++) {
        this.state.items.pop();
      }
    }
  }

  static defaultProps = {
    items: [{
      userId: 0,
      title: '/test',
      body: 'test',
    }],
  };

  render() {
    return (
      <div className="App-main">
        {this.state.items.map((items , index) =>
          <div key={ index } className="App-main-div">
            <p>Post number : { index + 1 }</p>
            <p>Post title : { items.title }</p>
            <p>From user : { items.userId }</p>
            <p>{ items.body }</p>
          </div>
        )}
        <div className="App-button-main">
          <button onClick={this.increment}>See more then {this.state.index - 10}</button>
          <button onClick={this.decrement}>See less then {this.state.index - 10}</button>
        </div>
      </div>
    );
  }
}

export default Main;

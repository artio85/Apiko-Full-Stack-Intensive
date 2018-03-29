import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import App from './../../App.css'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      index : 0,
      show: true,
      showText: "ToSee all List",
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.allList = this.allList.bind(this);
  }

  increment (){
    let temp = this.state.index ;
    if(this.state.index <= this.props.items.length - 10){

      console.log('index - ' + this.state.index);
      console.log('show - ' + this.state.show);
      console.log('showText - ' + this.state.showText);
      console.log('items.length - ' + this.props.items.length);
      for (var i = temp ; i < temp + 10; i++) {
        this.state.items.push(this.props.items[i]);
      }
      this.setState({index: this.state.index + 10});
    }
  }

  decrement (){
    let temp = this.state.index ;
    if(temp >= 10){
      console.log('index - ' + this.state.index);
      console.log('show - ' + this.state.show);
      console.log('showText - ' + this.state.showText);
      console.log('items.length - ' + this.props.items.length);
      for (var i = 0; i < 10; i++) {
        this.state.items.pop();
      }
      this.setState({index: this.state.index - 10});
    }
  }

  allList (){
    if(this.state.show){
      this.setState({index: this.props.items.length});
      this.setState({items: this.props.items});
      this.setState({showText: "Hide the List"});
      this.setState({show: !this.state.show});
      console.log('index - ' + this.state.index);
      console.log('show - ' + this.state.show);
      console.log('showText - ' + this.state.showText);
      console.log('items.length - ' + this.props.items.length);
    } else{
      this.setState({index: 0});
      this.setState({items: []});
      this.setState({showText: "ToSee all List"});
      this.setState({show: !this.state.show});
      console.log('index - ' + this.state.index);
      console.log('show - ' + this.state.show);
      console.log('showText - ' + this.state.showText);
      console.log('items.length - ' + this.props.items.length);
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
          <div key={index} className="App-main-div">
            <p>Post number : {index + 1}</p>
            <p>Post title : {items.title}</p>
            <p>From user : {items.userId}</p>
            <p>{items.body}</p>
          </div>
        )}
        <div className="App-button-main">
          <button onClick={this.increment}>ToSee more then {this.state.index}</button>
        <button onClick={this.decrement}>ToSee less then {this.state.index}</button>
        <button onClick={this.allList}>{this.state.showText}</button>
        </div>
      </div>
    );
  }
}

export default Main;

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
      noOnePosts: false,
      showText: "ToSee all List",
      search: '',
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount (){
    var mainList = this.props.items.filter( (items, index) =>
      index < 10
    );
    this.setState({items: mainList , index: 10});
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
    /*var newChangeList = this.props.items.filter( (items, index) =>
      index >= this.state.index && index < this.state.index + 10
    );
    this.setState({items: newChangeList , index: this.state.index + 10});*/
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
    /*var newChangeList = this.props.items.filter( (items, index) =>
      index < this.state.index && index >= this.state.index - 10
    );
    this.setState({items: newChangeList , index: this.state.index - 10});*/
  }

  handleSearch ({target : {name, value}}){
    this.setState({[name]: value});
    let displaySearch = this.props.items.filter( (items, index) =>
      items.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 && index < this.state.index
    );
    this.setState({items: displaySearch});
    console.log(displaySearch);
    if (displaySearch.length == 0) {
      this.setState({noOnePosts: true});
    }else this.setState({noOnePosts: false});
  }

  static defaultProps = {
    items: [{
      userId: 0,
      id: 0,
      title: '/test',
      body: 'test',
    }],
  };

  render() {
    return (
      <React.Fragment>
      <div className="App-header">
        <p>List of coments</p>
      <input type='text' name='search' value={this.state.search} placeholder='Search the posts' onChange={this.handleSearch}/>
      </div>
      {this.postsNotFound}
      <div className="App-main">
        {this.state.noOnePosts && <p className="App-noPost">The posts with such name are not found</p>}
        {this.state.items.map((items , index) =>
          <div key={index} className="App-main-div">
            <p>Post number : {items.id}</p>
            <p>Post title : {items.title}</p>
            <p>From user : {items.userId}</p>
            <p>{items.body}</p>
          </div>
        )}
        <div className="App-button-main">
          <button onClick={this.increment}>{this.state.index==0?'ToSee more posts':this.state.index<this.props.items.length?`ToSee more then (${this.state.index})`:'Full posts list'}</button>
          <button onClick={this.decrement}>{this.state.index>0?`ToSee less then (${this.state.index})`:'No one post'}</button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Main;

/*
this.allList = this.allList.bind(this);

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

<button onClick={this.allList}>{this.state.showText}</button>
*/



/*import React, { Component } from 'react';
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
        <button onClick={this.increment}>{this.state.index - 10<this.props.items.length?`See more then ${this.state.index - 10}`:'Full posts list'}</button>
        <button onClick={this.decrement}>{this.state.index - 10>0?`See less then ${this.state.index - 10}`:'No one post'}</button>
        </div>
      </div>
    );
  }
}

export default Main;*/
/*
        <button onClick={this.increment}>ToSee more then {this.state.index}</button>
        <button onClick={this.decrement}>ToSee less then {this.state.index}</button>
*/

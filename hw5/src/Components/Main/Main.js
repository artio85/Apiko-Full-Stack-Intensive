import React, { Component } from 'react';
import App from './../../App.css'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      index : 0,
      noOnePosts: false,
      search: '',
      isLoading: true,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount (){
    setTimeout(() => {
      var mainList = this.props.items.filter( (items, index) =>
        index < 10
      );
      this.setState({items: mainList , index: 10, isLoading: false ,});
    }, 5000);
  }

  increment (){
    if(this.state.index <= this.props.items.length - 10){
      var incrementList = this.props.items.filter( (items, index) =>
        index < this.state.index + 10
      );
      this.setState({items: incrementList , index: this.state.index + 10});
    }
  }

  decrement (){
    if(this.state.index >= 10){
      var decrementList = this.props.items.filter( (items, index) =>
        index < this.state.index - 10
      );
      this.setState({items: decrementList , index: this.state.index - 10});
    }
  }

  handleSearch ({target : {name, value}}){
    this.setState({[name]: value});
    let displaySearch = this.props.items.filter( (items, index) =>
      items.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 && index < this.state.index
    );
    this.setState({items: displaySearch});

    if (displaySearch.length == 0) {
      this.setState({noOnePosts: true});
    }else this.setState({noOnePosts: false});
  }

  loadingPost(){
          return (<h1>Posts is Loading </h1>);
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

      <div className="App-main">
        {this.state.noOnePosts && <h2 className="App-noPost">The posts with such name are not found</h2>}
        {this.state.isLoading?<h2 className="App-post-loading">First Posts is Loading <span>......</span></h2>:this.state.items.map((items , index) =>
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

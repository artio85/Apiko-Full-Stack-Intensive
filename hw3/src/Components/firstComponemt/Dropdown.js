import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props){
    super(props);

    this.state = {
       isOpend: false
     };
     /*
     this.toggleState = this.toggleState.bind(this);
     тогда в
     <div onClick={this.toggleState}>
     */
  }

  toggleState(){
      this.setState({isOpend: !this.state.isOpend});
  }

  render() {
    console.log('isOpend', this.state.isOpend);
    let DropText;
    if(this.state.isOpend){
      DropText = <div> The state is TRUE </div>;
    }
    return (
      <div onClick={this.toggleState.bind(this)}>
        It is Dropdown Component {DropText}
      </div>
    );
  }
}

export default Dropdown;

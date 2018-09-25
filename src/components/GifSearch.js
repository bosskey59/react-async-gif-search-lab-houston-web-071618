import React, { Component } from 'react';
export default class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <input onChange={e=>this.props.updateSearch(e.target.value)} placeholder="search" />
        <button onClick={this.props.makeFetch}> Search </button>
      </div>
    );
  }
}

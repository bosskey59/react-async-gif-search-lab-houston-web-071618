import React, { Component } from 'react';
import NavBar from './NavBar'
import GifSearch from './GifSearch'
import GifList from './GifList'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      gifs:[]
    };
  }

  updateSearch =(searchTerm)=>{
    this.setState({
      search:searchTerm
    })
  }

  makeFetch=()=>{
    let search = this.state.search
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => data.data.slice(0,3))
    .then(data => this.setState({gifs:data}))
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <NavBar color={"black"} title={"Giphy"} />
        <GifSearch updateSearch={this.updateSearch} makeFetch={this.makeFetch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

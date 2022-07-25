import { Component } from 'react';
import axios from "axios";
import "./App.css";
import CatList from './CatList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catData: [],
    };
  }

  getCats = async () => {
    const cats = await axios.get("http://localhost:3001/cats");
    this.setState({ catData: cats.data });
    console.log(cats.data)
  };
  render() {
    return (
      <div className="App">
        {this.state.catData && 
        <CatList catData = {this.state.catData}/>}
        <button onClick={this.getCats}>Get the cats bro!</button>
      </div>
    );
  }
}

export default App;

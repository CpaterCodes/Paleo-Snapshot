import './App.scss';
import {Component} from 'react';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';
import Search from './components/Search';
import NullData from './components/assets/null_data.json';

const emptyData = {
  range: "Awaiting search",
  ecology: "Awaiting search",
  taxonomy: "Awaiting search"
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {dataSet: emptyData, img: null};
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  async searchSubmit(searchTerm) {
   await this.handleNewData(searchTerm);
   await this.handleNewImage(searchTerm);
  }

  async handleNewData(searchTerm){
    const res = await fetch(`https://paleobiodb.org/data1.2/taxa/list.json?name=${searchTerm}&show=full`);
    if(!res.ok){
      this.setState({dataSet: NullData});
      return
    }
    const data = await res.json();
    this.setState({dataSet: data.records[0] ? data.records[0] : NullData});
  }

  async handleNewImage(searchTerm){
    if(!searchTerm){
      this.setState({img: null});
      return
    }
    const img = await fetch(`https://paleobiodb.org/data1.2/taxa/thumb.png?name=${searchTerm}`);
    this.setState({img: img.status === 200 ? img.url : null});
  }

  render() {
    return (
      <div className="App-body">
        <header className="App-banner">
          Paleo Snapshot
        </header>
        <main className="App-main">
          <ImagePort img={this.state.img}/>
          <Search onSubmit={this.searchSubmit}/>
          <Sheet dataSet={this.state.dataSet}/>
        </main>
      </div>
    );
  }
}

export default App;

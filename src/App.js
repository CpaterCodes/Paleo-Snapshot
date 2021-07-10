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

  searchSubmit(searchTerm) {
   this.handleNewData(searchTerm);
   this.handleNewImage(searchTerm);
  }

  handleNewData(searchTerm){
    if(!searchTerm){
      this.setState({dataSet: NullData})
      return
    }
    fetch('https://paleobiodb.org/data1.2/taxa/list.json?name=' + searchTerm + '&show=full')
    .then(res => res.json())
    .then(data => this.setState(
        {dataSet: data.records[0] ? data.records[0] : NullData}
      )
    );
  }

  handleNewImage(searchTerm){
    fetch('https://paleobiodb.org/data1.2/taxa/thumb.png?name=' + searchTerm)
    .then(res => this.setState({img: res.status === 200 ? res.url : null}));
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

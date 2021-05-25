import './App.scss';
import {Component} from 'react';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';
import Search from './components/Search';
import Caller from './components/Caller';

const emptyData = {
  range: "Awaiting search",
  ecology: "Awaiting search",
  taxonomy: "Awaiting search"
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {dataSet: emptyData};
    this.searchSubmit = this.searchSubmit.bind(this);
    this.handleNewData = this.handleNewData.bind(this);
  }

  searchSubmit(searchTerm) {
    fetch('https://paleobiodb.org/data1.2/taxa/list.json?name=' + searchTerm + '&show=full')
    .then(res => res.json().then(data => this.handleNewData(data)));
  }

  handleNewData(data){
    this.setState({dataSet: data.records[0]});
  }

  render() {
    return (
      <div className="App-body">
        <header className="App-banner">
          Paleo Snapshot
        </header>
        <main className="App-main">
          <ImagePort/>
          <Search onSubmit={this.searchSubmit}/>
          <Sheet dataSet={this.state.dataSet}/>
        </main>
      </div>
    );
  }
}

export default App;

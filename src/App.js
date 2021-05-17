import './App.scss';
import {Component} from 'react';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';
import Search from './components/Search';

const gingZorp = {
  range: "boo",
  ecology: "bar",
  taxonomy: "vaz"
};

class App extends Component {

  render() {
    return (
      <main className="App-main">
        <header className="App-banner">
          Paleo Snapshot
        </header><br/>
        <ImagePort/>
        <Search/>
        <Sheet dataSet={gingZorp}/>
      </main>
    );
  }
}

export default App;

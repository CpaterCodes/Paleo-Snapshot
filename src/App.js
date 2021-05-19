import './App.scss';
import {Component} from 'react';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';
import Search from './components/Search';
import Caller from './components/Caller';

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
        <Search onSubmit={console.log}/>
        <Sheet dataSet={gingZorp}/>
      </main>
    );
  }
}

export default App;

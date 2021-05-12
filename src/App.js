import './App.scss';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';
import Search from './components/Search';

const gingZorp = {
  range: "boo",
  ecology: "bar",
  taxonomy: "vaz"
};

function App() {
  return (
      <main className="App-main">
        <header className="App-banner">
          Paleo Snapshot
        </header><br/>
        <Search/>
        <Sheet dataSet={gingZorp}/>
      </main>
  );
}

export default App;

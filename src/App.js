import './App.scss';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';

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
        <Sheet dataSet={gingZorp}/>
      </main>
  );
}

export default App;

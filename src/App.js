import './App.css';
import ImagePort from './components/ImagePort'
import Sheet from './components/Sheet';

function App() {
  return (
      <main className="App-main">
        <header className="App-banner">
          Paleo Snapshot
        </header>
        <ImagePort/>
        <Sheet/>
      </main>
  );
}

export default App;

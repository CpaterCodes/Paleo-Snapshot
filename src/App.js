import './App.scss';
import { useState } from 'react';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';
import Search from './components/Search';
import NullData from './components/assets/null_data.json';

export default function App(){

  const [result, setResult] = useState({ data: NullData, img: null });

  const searchSubmit = async(searchTerm) => {
    let newImg = await fetchImg(searchTerm);
    let newData = await fetchData(searchTerm);
    setResult({data: newData, img: newImg});
  }

  const fetchData = async(searchTerm) => {
    const res = await fetch(`https://paleobiodb.org/data1.2/taxa/list.json?name=${searchTerm}&show=full`);
    if(!res.ok){
      return NullData
    }
    const data = await res.json();
    return data.records[0] ? data.records[0] : NullData;
  }

  const fetchImg = async(searchTerm) => {
    if(!searchTerm){
      return null
    }
    const imgRes = await fetch(`https://paleobiodb.org/data1.2/taxa/thumb.png?name=${searchTerm}`);
    return imgRes.status === 200 ? imgRes.url : null;
  }

  return (
    <div className="App-body">
      <header className="App-banner">
        Paleo Snapshot
      </header>
      <main className="App-main">
        <ImagePort img={result.img}/>
        <Search onSubmit={searchSubmit}/>
        <Sheet dataSet={result.data}/>
      </main>
    </div>
  );
}

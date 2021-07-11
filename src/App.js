import './App.scss';
import React, { useState } from 'react';
import ImagePort from './components/ImagePort';
import Sheet from './components/Sheet';
import Search from './components/Search';
import NullData from './components/assets/null_data.json';

export default function App(){

  const [data, setData] = useState(NullData);
  const [img, setImg] = useState(null);

  const searchSubmit = async(searchTerm) => {
    await handleNewData(searchTerm);
    await handleNewImage(searchTerm);
  }

  const handleNewData = async(searchTerm) => {
    const res = await fetch(`https://paleobiodb.org/data1.2/taxa/list.json?name=${searchTerm}&show=full`);
    if(!res.ok){
      setData(NullData);
      return
    }
    const data = await res.json();
    setData(data.records[0] ? data.records[0] : NullData);
  }

  const handleNewImage = async(searchTerm) => {
    if(!searchTerm){
      setImg(null);
      return
    }
    const imgRes = await fetch(`https://paleobiodb.org/data1.2/taxa/thumb.png?name=${searchTerm}`);
    setImg(imgRes.status === 200 ? imgRes.url : null);
  }

  return (
    <div className="App-body">
      <header className="App-banner">
        Paleo Snapshot
      </header>
      <main className="App-main">
        <ImagePort img={img}/>
        <Search onSubmit={searchSubmit}/>
        <Sheet dataSet={data}/>
      </main>
    </div>
  );
}

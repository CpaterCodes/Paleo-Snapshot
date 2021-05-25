
import React, { useState } from 'react';
import Page from './Page.js';
import './assets/Sheet.scss';

export default function Sheet(props){
  
  const [page,setPage] = useState("Range");

  return(
    <div className='Sheet-main'>
      <section className='button-panel'>
        <button id="Range" onClick={() => setPage("Range")}>Range</button>
        <button id="Ecology" onClick={() => setPage("Ecology")}>Ecology</button>
        <button id="Taxonomy" onClick={() => setPage("Taxonomy")}>Taxonomy</button>
      </section>
        <Page data={props.dataSet} page={page}/>
    </div>
  );
}

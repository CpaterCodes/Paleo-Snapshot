import React, { useState } from 'react';
import './assets/Search.scss';

export default function Search(props) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  }

  return(
      <form className="search-bar"
        onSubmit={handleSubmit}>

        <input className="search-input" type="text" value={term}
          onChange={e => setTerm(e.target.value)}/>

        <input className="search-submit"
          type="submit" value="=>" />

      </form>
    );
}

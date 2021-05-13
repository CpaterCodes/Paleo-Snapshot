import {Component} from 'react';
import nullImage from './assets/null_result.png';

export default function ImagePort(props){
  return (
      <div>
        <img src={props.img ? props.img : nullImage} alt="Taxon thumbnail goes here"/>
      </div>
    );
  }

import {Component} from 'react';
import Page from './Page.js';
import './assets/Sheet.scss';

export default class Sheet extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSet: this.props.dataSet || null,
      page: "Range"
    };
  }

  render() {
    return(
      <div className='Sheet-main'>
        <section className='button-panel'>
          <button id="Range" onClick={() => this.setState({page: "Range"})}>Range</button>
          <button id="Ecology" onClick={() => this.setState({page: "Ecology"})}>Ecology</button>
          <button id="Taxonomy" onClick={() => this.setState({page: "Taxonomy"})}>Taxonomy</button>
        </section>
          <Page data={this.state.dataSet} page={this.state.page}/>
      </div>
    );
  }
}

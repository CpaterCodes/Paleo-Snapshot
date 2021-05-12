import {Component} from 'react';
import './assets/Sheet.scss';

export default class Sheet extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSet: this.props.dataSet || "",
      page: "Range"
    };
  }

  dataPage(){
    switch(this.state.page){
      case "Range":
        return (<section className="data-body">{this.state.dataSet.range}</section>);
      case "Ecology":
        return (<section className="data-body">{this.state.dataSet.ecology}</section>);
      case "Taxonomy":
        return (<section className="data-body">{this.state.dataSet.taxonomy}</section>);
    }

  }

  render() {
    return(
      <div className='Sheet-main'>
        <section className='button-panel'>
          <button id="Range" onClick={() => this.setState({page: "Range"})}>Range</button>
          <button id="Ecology" onClick={() => this.setState({page: "Ecology"})}>Ecology</button>
          <button id="Taxonomy" onClick={() => this.setState({page: "Taxonomy"})}>Taxonomy</button>
        </section>
        {this.dataPage()}
      </div>
    );
  }
}

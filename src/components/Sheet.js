import {Component} from 'react';

export default class Sheet extends Component {

  constructor(props){
    super(props);
    this.state = { content: this.props.content || ""};
  }

  render() {
    return(
      <div>
        <button id="Range">Range</button>
        <button id="Ecology">Ecology</button>
        <button id="Taxonomy">Taxonomy</button>
        <section>
          {this.state.content}
        </section>
      </div>
    );
  }
}

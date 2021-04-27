import {Component} from 'react';
import nullImage from './assets/null_result.png';

export default class ImagePort extends Component {

  constructor(props){
    super(props);
    this.state = {
      img: (this.props.img || nullImage),
      value: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div>
        <img src={this.state.img} alt="Taxon thumbnail goes here"/> <br/>
        <input type="text" value={this.state.taxon} onChange={this.handleChange}/>
        <input type="submit" value="=>" />
      </div>
    );
  }
}

import {Component} from 'react';
import nullImage from './assets/null_result.png';

export default class ImagePort extends Component {

  constructor(props){
    super(props);
    this.state = {
      img: (this.props.img || nullImage)
    };
  }

  render() {
    return(
      <div>
        <img src={this.state.img} alt="Taxon thumbnail goes here"/>
      </div>
    );
  }
}

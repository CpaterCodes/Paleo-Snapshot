import {Component} from 'react';

export default class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({searchTerm: e.target.searchTerm});
  }

  render() {
    return('haha');
  }
}

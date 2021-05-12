import {Component} from 'react';

export default class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  render() {
    return(
      <div className="search-bar">
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="=>" />
      </div>
    );
  }
}

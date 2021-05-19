import {Component} from 'react';

export default class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    this.props.onSubmit(this.state.value);
    e.preventDefault();
  }

  render() {
    return(
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="=>" />
      </form>
    );
  }
}

import React from 'react';

//https://es.reactjs.org/docs/forms.html

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {term: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({term: event.target.value});
    }
  
    handleSubmit(event) {
      console.log(this.state.value);// Este es el valor que enviará a buscar
      event.preventDefault();
      this.props.handleFormSubmit(this.state.term);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input style={{marginTop: "20px"}} type="text" value={this.state.term} onChange={this.handleChange} placeholder="Buscar"/>
          </label>
        </form>
      );
    }
  }

export default SearchBar;


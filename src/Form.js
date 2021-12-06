import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
      super();
      this.state = {
        title: ''
      }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
        this.props.searchMovies(this.state.title)
    }
  
    render() {
        return (
          <form>
            <input
              type='text'
              placeholder='Movie title'
              name='title'
              value={this.state.title}
              onChange={event => this.handleChange(event)}
            />
        
            {/* <button onClick={event => this.submitIdea(event)}>SUBMIT</button> */}
          </form>
        )
      }    
}    

export default Form;
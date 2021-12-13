import React, { Component } from 'react';
import './css/Form.css';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ''
      }
    }

    handleChange = event => {
      this.setState({[event.target.name]: event.target.value})
      this.props.searchMovies(this.state.title)
      if (!this.state.title) {
        this.props.componentDidMount()
      }

    }

    render() {
        return (
          <form>
            <input
              type='text'
              placeholder='Search Movie Title'
              name='title'
              value={this.state.title}
              onChange={event => this.handleChange(event)}
            />
          </form>
        )
      }
}

export default Form;

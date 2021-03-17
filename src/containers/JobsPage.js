import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobPage extends Component {
  componentDidMount() {
    //getting the id from the route coming from React
    const id = this.props.match.params.id;
  }

  render() {
    return <h1>Your Job</h1>;
  }
}

export default connect()(JobPage);

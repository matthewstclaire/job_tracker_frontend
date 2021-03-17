import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedJob, unsetJob } from '../redux/actionCreators';

class JobPage extends Component {
  componentDidMount() {
    //getting the id from the route coming from React
    const id = this.props.match.params.id;
    this.props.setSelectedJob(id);
  }

  componentWillUnmount() {
    this.props.unsetJob();
  }

  render() {
    // const { title } = this.props;
    return (
      <div className="Show">
        <h1>Your Job</h1>
        <h2>{this.props.title}</h2>
        <h3>{this.props.company}</h3>
        <p>{this.props.date_applied}</p>
        <p>{this.props.interest}</p>
        <p>{this.props.open}</p>
        <p>{this.props.applied_on}</p>
        <p>{this.props.next_steps}</p>
        <button onClick={this.props.history.goBack}>All Jobs</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.jobs.selectedJob,
});

export default connect(mapStateToProps, { setSelectedJob, unsetJob })(JobPage);

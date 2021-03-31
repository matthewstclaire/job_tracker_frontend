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

  renderPage = () => {
    return (
      <div className="job-show">

        <h1>Job Details</h1>
        <h2>Job Title: {this.props.title}</h2>
        <h3>Company: {this.props.company}</h3>
        <p>You applied on: {this.props.dateApplied}</p>
        <p>Interest Level: {this.props.interest}</p>
        <p>{this.props.open}</p>
        <p>Applied on: {this.props.appliedOn}</p>
        <p>Next Steps: </p>
        <p>{this.props.nextSteps}</p>
        <button onClick={this.props.history.goBack}>All Jobs</button>
      </div>
    );
  };

  renderSpinner = () => {
    return <div className="loader"></div>;
  };

  render() {
    return (
      <div className="show">
        {this.props.id ? this.renderPage() : this.renderSpinner()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.jobs.selectedJob,
});

export default connect(mapStateToProps, { setSelectedJob, unsetJob })(JobPage);

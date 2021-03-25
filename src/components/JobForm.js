import React from 'react'
import { connect } from 'react-redux'
import { jobFormChange, submitNewJob } from '../redux/actionCreators'

const JobForm = (props) => {

  // const { title, dateApplied, company, interest, appliedOn, nextSteps } = props.form

  const onSubmit = (e) => {
    e.preventDefault()
    props.submitNewJob(props.form.jobForm)
    alert("New Job Submitted Successfully")
  }

        return(
          <div>
            <form onSubmit={ onSubmit }>
              <p>
                <label>Job Title</label>
                <input type="text" name="title" value={props.title} onChange={props.jobFormChange} />
              </p>
              <p>
                <label>Date Applied</label>
                <input type="text" name="date_applied" value={props.dateApplied} onChange={props.jobFormChange}  />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" value={props.company} onChange={props.jobFormChange} />
              </p>
              {/* <p>
                <label>Interest Level</label>
                <input type="number" name="interest" value={props.interest} onChange={props.jobFormChange} />
              </p> */}

              <select value={props.interest} name="interest" onChange={props.jobFormChange} >
                <option type="number" value="1" >1</option>
                <option type="number" value="2">2</option>
                <option type="number" value="3">3</option>
                <option type="number" value="4">4</option>
                <option type="number" value="5">5</option>
            </select>

            <br></br>
              
              <select value={props.appliedOn} name="applied_on" onChange={props.jobFormChange} >
                <option value="LinkedIn" >LinkedIn</option>
                <option value="Indeed">Indeed</option>
                <option value="AngelList">AngelList</option>
                <option value="Other">Other</option>
            </select>
            <br></br>
            <textarea name="next_steps" value={props.nextSteps} onChange={props.jobFormChange} >
            </textarea>
            <br></br>
              <input type="submit" value="Submit" />
            </form>

            <button onClick={props.history.goBack}>All Jobs</button>
          </div>
        );
      }

      const mapStateToProps = (state) => ({
        form: state.jobs
      })


    export default connect(mapStateToProps, { jobFormChange, submitNewJob })(JobForm)

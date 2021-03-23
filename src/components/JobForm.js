import React from 'react'
import { connect } from 'react-redux'
import { reviewFormChange } from '../redux/actionCreators'

const JobForm = (props) => {

  // const { title, dateApplied, company, interest, appliedOn, nextSteps} = props.form

  const onSubmit = (e) => {
    e.preventDefault()
  }

        return(
          <div>
            <form onSubmit={ onSubmit }>
              <p>
                <label>Job Title</label>
                <input type="text" name="title" value={props.title} onChange={props.reviewFormChange} />
              </p>
              <p>
                <label>Date Applied</label>
                <input type="text" name="dateApplied" value={props.dateApplied} onChange={props.reviewFormChange}  />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" value={props.company} onChange={props.reviewFormChange} />
              </p>
              <p>
                <label>Interest Level</label>
                <input type="number" name="interestLevel" value={props.interest} onChange={props.reviewFormChange} />
              </p>
              
              <select value={props.appliedOn} onChange={props.reviewFormChange} >
                <option value="LinkedIn" >LinkedIn</option>
                <option value="Indeed">Indeed</option>
                <option value="AngelList">AngelList</option>
                <option value="Other">Other</option>
            </select>
            <br></br>
            <textarea value={props.nextSteps} onChange={props.reviewFormChange} >
            </textarea>
            <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      }

      const mapStateToProps = (state) => ({
        form: state.jobs
      })


    export default connect(mapStateToProps, { reviewFormChange })(JobForm)

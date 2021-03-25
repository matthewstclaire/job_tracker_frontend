import React from 'react';
import {connect} from 'react-redux'
import { handleSearchFormChange } from '../redux/actionCreators'

const Filters = (props) => {

    return( 
    <form className="form-search">
        <label>
          Search Company:
          <input type="text" name="search" value={props.search} onChange={props.handleSearchFormChange} />
        </label>
        {/* <input type="submit" value="Search" /> */}
      </form>)
      
}

const mapStateToProps = (state) => ({
    ...state.jobs.filtersForm
})

export default connect(mapStateToProps, { handleSearchFormChange })(Filters)
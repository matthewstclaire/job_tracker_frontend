const nullJob = {
  title: '',
  dateApplied: '',
  company: '',
  nextSteps: '',
  interest: '',
  open: false,
  appliedOn: '',
};

const nullJobForm = {
  title: 'N/A',
  date_applied: 'N/A',
  company: 'N/A',
  next_steps: 'It looks like your next steps field was left blank!',
  interest: 5,
  open: true,
  applied_on: 'Other',
}

const initialState = {
  jobs: [],
  selectedJob: nullJob,
  jobForm: nullJobForm,
  filtersForm: {
    search: ""
  } 
};

const jobsReducer = (state = initialState, action) => {
  // console.log('Jobs reducer', state);
  switch (action.type) {
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'SET_SELECTED_JOB':
      return { ...state, selectedJob: action.payload };
    case 'UNSET_JOB':
      return { ...state, selectedJob: nullJob };

    case "ADD_JOB":
      return {...state, jobForm: {
        ...state.jobForm,
        [action.payload.name]: action.payload.value
      }}
      case "FILTERS_FORM_CHANGE":
        return {...state, filtersForm: {
          ...state.filtersForm,
          [action.payload.name]: action.payload.value
        }}

    default:
      return { ...state };
  }
};

// create_table "jobs", force: :cascade do |t|
// t.string "title"
// t.string "date_applied"
// t.string "company"
// t.string "next_steps"
// t.integer "interest"
// t.boolean "open"
// t.string "applied_on"
// t.integer "user_id"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.index ["user_id"], name: "index_jobs_on_user_id"
// end

export default jobsReducer;

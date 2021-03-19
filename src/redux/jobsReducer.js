const nullJob = {
  title: '',
  date_applied: '',
  company: '',
  next_steps: '',
  interest: '',
  open: false,
  applied_on: '',
};

const initialState = {
  jobs: [],
  selectedJob: nullJob,
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

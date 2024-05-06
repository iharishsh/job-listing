import { combineReducers } from 'redux';
import {
  UPDATE_FILTERS,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from './actions';

const initialFiltersState = {
  remote: false,
  location: '',
  techStack: '',
  minBasePay: '',
  companyName: '',
};

const filtersReducer = (state = initialFiltersState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const initialJobsState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducer = (state = initialJobsState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  filters: filtersReducer,
  jobs: jobsReducer,
});

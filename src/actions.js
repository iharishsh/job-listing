export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST
});

export const fetchJobsSuccess = jobs => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs
});

export const fetchJobsFailure = error => ({
  type: FETCH_JOBS_FAILURE,
  payload: error
});

export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch(fetchJobsRequest());
    
    try {
      let offset = 0;
      let totalCount = 0;
      const limit = 1000; 
      let allJobs = [];

      do {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            limit,
            offset,
          }),
        });

        const data = await response.json();

        if (data && data.jdList && data.jdList.length > 0) {
          allJobs = [...allJobs, ...data.jdList];
        }

        totalCount = data.totalCount;

        offset += limit;
      } while (allJobs.length < totalCount);

      dispatch(fetchJobsSuccess(allJobs));
    } catch (error) {
      // Handle error
      dispatch(fetchJobsFailure(error.message));
      console.error('Error fetching jobs:', error);
    }
  };
};
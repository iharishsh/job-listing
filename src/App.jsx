import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions';
import JobCard from './components/JobCard';
import Filters from './components/Filters';
import { Box, Grid, CircularProgress } from '@mui/material';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const filteredJobs = jobs.filter(job => {
    // Apply filters based on selected criteria
    if (filters.remote && job.location.toLowerCase() !== 'remote') {
      return false; 
    }
    if (filters.location && job.location.toLowerCase() !== filters.location.toLowerCase()) {
      return false; 
    }
    if (filters.role && !job.jobRole.toLowerCase().includes(filters.role.toLowerCase())) {
      return false; 
    }
    if (filters.techStack && !job.jobRole.toLowerCase().includes(filters.techStack.toLowerCase())) {
      return false; 
    }
    if (filters.experience && job.minExp < parseInt(filters.experience)) {
      return false;
    }
    if (filters.minBasePay && job.minJdSalary < parseInt(filters.minBasePay)) {
      return false;
    }
    if (filters.companyName && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) {
      return false; 
    }
    return true; 
  });
  

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="filters">
            <Filters />
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={3}
              sx={{
                margin: '0 auto',
                width: 'calc(100% - 48px)',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              {filteredJobs.map((job) => (
                <Grid key={job.jdUid} item xs={12} sm={6} md={4}>
                  <JobCard job={job} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </div>
  );
}

export default App;

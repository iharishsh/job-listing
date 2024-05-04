import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./actions";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import { Box, Grid } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="App">
      <Filters />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          sx={{
            margin: "0 auto",
            width: "calc(100% - 48px)",
            paddingLeft: "24px", 
            paddingRight: "24px",
          }}
        >
          {jobs.map((job) => (
            <Grid key={job.jdUid} item xs={12} sm={6} md={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;

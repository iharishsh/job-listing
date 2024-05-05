import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./actions";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import { Box, Grid, CircularProgress } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchJobs())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw", 
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;

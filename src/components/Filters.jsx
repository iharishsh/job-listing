import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilters } from '../actions';
import { FormControl, InputLabel, MenuItem, Select, TextField, Grid } from '@mui/material';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleFilterChange = (key, value) => {
    dispatch(updateFilters({ [key]: value }));
  };

  return (
    <div className="filters">
      <Grid container spacing={1}>
        <Grid item width={120}>
          <TextField
            label="Roles"
            variant="outlined"
            fullWidth
            sx={{ height: '30px' }}
            value={filters.role}
            onChange={(e) => handleFilterChange('role', e.target.value)}
          />
        </Grid>
        <Grid item width={120}>
          <TextField
            label="Experience"
            variant="outlined"
            fullWidth
            sx={{ height: "30px" }}
            value={filters.experience}
            onChange={(e) => handleFilterChange("experience", e.target.value)}
          />
        </Grid>
        <Grid item width={120}>
          <FormControl variant="outlined" fullWidth sx={{ height: "30px" }}>
            <InputLabel>Remote</InputLabel>
            <Select
              label="Remote"
              value={filters.remote ? "remote" : "on-site"}
              onChange={(e) => handleFilterChange("remote", e.target.value === "remote")}
            >
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="on-site">On-site</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item width={150}>
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            sx={{ height: "30px" }}
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </Grid>
        <Grid item width={150}>
          <TextField
            label="Tech Stack"
            variant="outlined"
            fullWidth
            sx={{ height: "30px" }}
            value={filters.techStack}
            onChange={(e) => handleFilterChange("techStack", e.target.value)}
          />
        </Grid>
        <Grid item width={150}>
          <TextField
            label="Min Base Pay"
            variant="outlined"
            fullWidth
            sx={{ height: "30px" }}
            value={filters.minBasePay}
            onChange={(e) => handleFilterChange("minBasePay", e.target.value)}
          />
        </Grid>
        <Grid item width={190}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            sx={{ height: "30px" }}
            value={filters.companyName}
            onChange={(e) => handleFilterChange("companyName", e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;

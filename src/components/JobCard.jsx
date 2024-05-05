import { useState } from "react";
import { styled } from "@mui/system";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const StyledCard = styled(Card)({
  backgroundColor: "#ffffff",
  marginBottom: "10px",
  borderRadius: "20px",
  transition: "transform 0.2s ease-in-out", 
  "&:hover": {
    transform: "scale(1.01)",
  },
});


const ApplyButton = styled(Button)({
  width: "100%",
  backgroundColor: "rgb(85, 239, 196)",
  color: "black",
  fontWeight: 500, 
  "&:hover": {
    backgroundColor: "rgb(85, 239, 196)", 
  },
  "&:focus": {
    outline: "none", 
  },
  borderRadius: "8px"
});


const JobCard = ({ job }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const renderEstimatedSalary = () => {
    let salaryText = "";
    if (job.minJdSalary !== null && job.maxJdSalary !== null) {
      salaryText = `${job.minJdSalary} - ${job.maxJdSalary} ${job.salaryCurrencyCode}`;
    } else if (job.minJdSalary !== null) {
      salaryText = `${job.minJdSalary} ${job.salaryCurrencyCode}`;
    } else if (job.maxJdSalary !== null) {
      salaryText = `${job.maxJdSalary} ${job.salaryCurrencyCode}`;
    }
    return salaryText ? (
      <Typography variant="subtitle2" color="textSecondary">
        <span style={{ color: "grey" }}>Estimated Salary: {salaryText}</span>
      </Typography>
    ) : null;
  };

  const renderExperience = () => {
    let expText = "";
    if (job.minExp !== null && job.maxExp !== null) {
      expText = `${job.minExp} - ${job.maxExp} years`;
    } else if (job.minExp !== null) {
      expText = `${job.minExp} years`;
    } else if (job.maxExp !== null) {
      expText = `${job.maxExp} years`;
    }
    return expText ? (
      <>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ fontWeight: "bold", color: "grey" }}
        >
          Minimum Experience
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{ color: "grey" }}>
          {expText}
        </Typography>
      </>
    ) : null;
  };

  const truncatedText =
    job.jobDetailsFromCompany.length > 250
      ? job.jobDetailsFromCompany.substring(0, 250) + "..."
      : job.jobDetailsFromCompany;

  return (
    <StyledCard>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={job.logoUrl}
              alt={job.companyName}
              style={{ width: "64px", height: "64px", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={12} sm container direction="column">
            <Grid item>
              <Typography variant="h6" style={{ fontWeight: "500" }}>
                {job.companyName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                style={{ textTransform: "capitalize", fontSize: "0.9rem" }}
              >
                {job.jobRole}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                style={{ textTransform: "capitalize", fontSize: "0.8rem" }}
              >
                {job.location}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {renderEstimatedSalary()}
        <Typography
          variant="h6"
          style={{ fontWeight: "500", marginTop: "8px" }}
        >
          About Company:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {showFullText ? job.jobDetailsFromCompany : truncatedText}
        </Typography>
        {job.jobDetailsFromCompany.length > 250 && (
          <Button
          color="primary"
          onClick={toggleFullText}
          sx={{
            textAlign: "center",
            display: "block",
            mx: "auto", 
            mt: 1, 
            fontSize: "0.7rem",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          {showFullText ? "View Less" : "View Job"}
        </Button>
        )}
        {renderExperience()}
        <ApplyButton variant="contained">Apply</ApplyButton>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;

import { styled } from '@mui/system';
import { Card, CardContent, Typography, Button } from '@mui/material';

const StyledCard = styled(Card)({
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '16px', 
  borderRadius: '10px'
});

const ApplyButton = styled(Button)({
  width: '100%',
  backgroundColor: 'rgb(85, 239, 196)',
  color: 'black',
});

const JobCard = ({ job }) => {
  return (
      <StyledCard>
        <CardContent>
        <Typography variant="h6" gutterBottom>
            {job.companyName}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {job.jobRole}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {job.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            About Company: {job.jobDetailsFromCompany}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Minimum Experience {job.minExp} - {job.maxExp} years
          </Typography>
          <ApplyButton variant="contained">
            Apply
          </ApplyButton>
        </CardContent>
      </StyledCard>
  );
};

export default JobCard;

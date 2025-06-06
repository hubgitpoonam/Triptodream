import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TopDestinations from './TopDestinations';

const PageTitle = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '40px 0',
  textAlign: 'center',
  marginBottom: '30px',
});

const InfoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const WeekendGetawaysPage = () => {
  return (
    <>
      {/* <PageTitle> */}
        {/* <Container>
          <Typography variant="h3" component="h1">
            Weekend Getaways
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, maxWidth: '800px', mx: 'auto' }}>
            Escape the routine with our handpicked weekend getaway destinations. Perfect for short trips and quick adventures.
          </Typography>
        </Container> */}
      {/* </PageTitle> */}
{/*       
      <Container>
        <InfoPaper>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Plan Your Perfect Weekend Escape
          </Typography>
          <Typography variant="body1" paragraph>
            Our weekend getaway packages are designed for travelers looking for a quick escape from the hustle and bustle of daily life. 
            Each destination offers unique experiences, from serene hill stations to vibrant beaches.
          </Typography>
          <Typography variant="body1">
            Browse through our selection of destinations below and click on any that interest you to view detailed itineraries, accommodation options, and booking information.
          </Typography>
        </InfoPaper>
      </Container> */}
      
      <TopDestinations />
    </>
  );
};

export default WeekendGetawaysPage; 
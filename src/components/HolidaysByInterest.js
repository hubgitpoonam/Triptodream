import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const InterestCard = styled(Card)({
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  height: '300px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
});

const CardImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CardOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  color: '#fff',
  textAlign: 'center',
});

const categories = [
  {
    id: 1,
    name: 'Family Package',
    image: '/Images/familypackage.jpg',
  },
  {
    id: 2,
    name: 'Honeymoon Package',
    image: '/Images/honeymoon-packages.jpg',
  },
  {
    id: 3,
    name: 'Adventure Package',
    image: '/Images/adventure.jpg',
  },
  {
    id: 4,
    name: 'Beaches',
    image: '/Images/beach.jpg',
  },
  {
    id: 5,
    name: 'Hill Stations',
    image: '/Images/hill-station-packages.jpg',
  },
];

const HolidaysByInterest = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#333',
          }}
        >
          Holidays by Interest
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Link to="/weekend-getaways" style={{ textDecoration: 'none' }}>
                <InterestCard>
                  <CardImage src={category.image} alt={category.name} />
                  <CardOverlay>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                      }}
                    >
                      {category.name}
                    </Typography>
                  </CardOverlay>
                </InterestCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HolidaysByInterest; 
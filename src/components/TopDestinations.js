import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const DestinationCard = styled(Card)({
  position: 'relative',
  height: '300px',
  overflow: 'hidden',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
});

const CardOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
  padding: '20px',
  color: '#fff',
});

const destinations = [
  {
    id: 1,
    name: 'UttaraKhand',
    packages: 3,
    image: '/Images/uttrakhand.jpg',
    link: '/destinations/uttarakhand',
  },
  {
    id: 2,
    name: 'Explore Kashmir',
    packages: 7,
    image: '/Images/kashmir.jpg',
    link: '/destinations/kashmir',
  },
  {
    id: 3,
    name: 'Goa',
    packages: 1,
    image: '/Images/Goa.jpg',
    link: '/destinations/goa',
  },
  {
    id: 4,
    name: 'Kerala',
    packages: 10,
    image: '/Images/kerela.jpg',
    link: '/destinations/kerala',
  },
  {
    id: 5,
    name: 'Ladakh',
    packages: 8,
    image: '/Images/ladakh.jpg',
    link: '/destinations/ladakh',
  },
  {
    id: 6,
    name: 'Himachal',
    packages: 3,
    image: '/Images/himachal.jpg',
    link: '/destinations/himachal',
  },
];

const TopDestinations = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
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
          Top Destinations
        </Typography>
        <Grid container spacing={3}>
          {destinations.map((destination) => (
            <Grid item xs={12} sm={6} md={4} key={destination.id}>
              <Link to={destination.link} style={{ textDecoration: 'none' }}>
                <DestinationCard>
                  <CardMedia
                    component="img"
                    height="300"
                    image={destination.image}
                    alt={destination.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardOverlay>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {destination.name}
                    </Typography>
                    <Typography variant="body2">
                      {destination.packages} {destination.packages === 1 ? 'Package' : 'Packages'}
                    </Typography>
                  </CardOverlay>
                </DestinationCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopDestinations; 
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CircularProgress, Alert } from '@mui/material';
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

// Fallback destinations in case API fails
const fallbackDestinations = [
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
    image: '/Images/Kerala.jpg',
    link: '/destinations/kerala',
  },
  {
    id: 5,
    name: 'Ladakh',
    packages: 8,
    image: '/Images/ladhak_home.jpg',
    link: '/destinations/ladakh',
  },
  {
    id: 6,
    name: 'Himachal Pradesh',
    packages: 3,
    image: '/Images/himachal.jpg',
    link: '/destinations/himachal-pradesh',
  },
  {
    id: 7,
    name: 'Rajasthan',
    packages: 1,
    image: '/Images/rajashthan2.jpg',
    link: '/destinations/rajasthan',
  },
  {
    id: 8,
    name: 'Himachal(Jibhi)',
    packages: 1,
    image: '/Images/JIBHI1.jpg',
    link: '/destinations/himachal-jibhi',
  }
];

const TopDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch destinations from the backend
    const fetchDestinations = async () => {
      try {
        // Fetch tour packages
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tour-packages/1`);
        console.log(response,"response1");
        if (!response.ok) {
          throw new Error('Failed to fetch destinations');
        }
        
        const data = await response.json();
        console.log(data,"data1");
        
        // For debugging - log all package titles
        console.log("Package titles:", data.map(pkg => pkg.title));
        
        // Group packages by destination and count them
        const destinationMap = new Map();
        
        data.forEach(pkg => {
          // Extract destination name from package title
          // This assumes package titles contain the destination name
          let destinationName = '';
          
          if (pkg.title.toLowerCase().includes('kashmir')) {
            destinationName = 'Explore Kashmir';
          } else if (pkg.title.toLowerCase().includes('ladakh')) {
            destinationName = 'Ladakh';
          } else if (pkg.title.toLowerCase().includes('goa')) {
            destinationName = 'Goa';
          } else if (pkg.title.toLowerCase().includes('kerala')) {
            destinationName = 'Kerala';
          } else if (pkg.title.toLowerCase().includes('uttarakhand')) {
            destinationName = 'UttaraKhand';
          } else if (pkg.title.toLowerCase() === 'himachal' || pkg.title.toLowerCase().includes('himachal pradesh')) {
            destinationName = 'Himachal Pradesh';
          } else if (pkg.title.toLowerCase().includes('rajasthan')) {
            destinationName = 'Rajasthan';
          } else if (pkg.title.toLowerCase().includes('jibhi')) {
            destinationName = 'Himachal(Jibhi)';
          } else {
            // Skip packages that don't match any destination
            console.log("Skipping package with title:", pkg.title);
            return;
          }
          
          // Get image path based on destination name
          let imagePath = '';
          switch (destinationName) {
            case 'Explore Kashmir':
              imagePath = '/Images/kashmir.jpg';
              break;
            case 'Ladakh':
              imagePath = '/Images/ladhak_home.jpg';
              break;
            case 'Goa':
              imagePath = '/Images/Goa.jpg';
              break;
            case 'Kerala':
              imagePath = '/Images/kerela.jpg';
              break;
            case 'UttaraKhand':
              imagePath = '/Images/uttrakhand.jpg';
              break;
            case 'Himachal Pradesh':
              imagePath = '/Images/himachal.jpg';
              break;
            case 'Rajasthan':
              imagePath = '/Images/rajashthan2.jpg';
              break;
            case 'Himachal(Jibhi)':
              imagePath = '/Images/JIBHI1.jpg';
              break;
            default:
              imagePath = '/Images/default.jpg';
          }
          
          // Format for routing
          const linkPath = '/destinations/' + destinationName.toLowerCase().replace('explore ', '').replace(' pradesh', '').replace('(', '-').replace(')', '');
          
          console.log(`Mapped ${pkg.title} to ${destinationName} with link ${linkPath}`);
          
          // Update destination map
          if (destinationMap.has(destinationName)) {
            destinationMap.get(destinationName).packages += 1;
          } else {
            destinationMap.set(destinationName, {
              id: destinationMap.size + 1,
              name: destinationName,
              packages: 1,
              image: imagePath,
              link: linkPath
            });
          }
        });
        
        // Convert map to array
        const destinationsArray = Array.from(destinationMap.values());
        console.log("Destinations array:", destinationsArray);
        
        // Always ensure Himachal Pradesh is included
        if (!destinationsArray.some(d => d.name === 'Himachal Pradesh')) {
          destinationsArray.push({
            id: destinationsArray.length + 1,
            name: 'Himachal Pradesh',
            packages: 1,
            image: '/Images/himachal.jpg',
            link: '/destinations/himachal'
          });
        }
        
        if (destinationsArray.length > 0) {
          setDestinations(destinationsArray);
        } else {
          // If no destinations were found in the API, use fallback
          setDestinations(fallbackDestinations);
        }
      } catch (err) {
        console.error('Error fetching destinations:', err);
        // setError('Failed to load destinations. Using default data.');
        // Use fallback destinations in case of error
        setDestinations(fallbackDestinations);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        {error && (
          <Alert severity="warning" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}
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
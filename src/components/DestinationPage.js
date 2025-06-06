import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Divider,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Alert,
  Button,
  FormControlLabel,
  Checkbox,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TodayIcon from '@mui/icons-material/Today';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LandscapeIcon from '@mui/icons-material/Landscape';

const HeroImage = styled(Box)({
  height: '500px',
  width: '100%',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
  }
});

const HeroText = styled(Box)({
  position: 'relative',
  zIndex: 1,
  padding: '2rem',
  width: '100%',
  color: 'white',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: '12px',
}));

const ItineraryDay = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const BookingButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#730664',
  color: 'white',
  padding: '12px 30px',
  marginTop: '20px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#5a0550',
  },
  '&.Mui-disabled': {
    backgroundColor: '#cccccc',
    color: '#666666',
  },
}));

const TermsContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(3),
  maxHeight: '300px',
  overflowY: 'auto',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: '12px',
}));

const DestinationPage = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [destination, setDestination] = useState(null);
  const [packages, setPackages] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        // Check if API URL is configured
        const apiUrl = process.env.REACT_APP_API_URL;
        if (!apiUrl) {
          throw new Error('API URL is not configured. Please check environment variables.');
        }

        // Ensure API_URL ends with a slash before appending the path
        const baseUrl = apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/`;
        const endpoint = `${baseUrl}api/tour-packages/`;
        
        console.log('Fetching tour packages from:', endpoint);
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        
        // Filter packages by destination name (assuming the title contains the destination name)
        // Special handling for Himachal packages since we have both "Himachal Pradesh" and "Himachal(Jibhi)"
        let filteredPackages;
        if (name.toLowerCase() === 'himachal-pradesh' || name.toLowerCase() === 'himachal') {
          filteredPackages = data.filter(pkg => 
            pkg.title.toLowerCase() === 'himachal' || pkg.title.toLowerCase().includes('himachal pradesh')
          );
        } else if (name.toLowerCase() === 'himachal-jibhi') {
          filteredPackages = data.filter(pkg => 
            pkg.title.toLowerCase().includes('jibhi')
          );
        } else {
          filteredPackages = data.filter(pkg => 
            pkg.title.toLowerCase().includes(name.toLowerCase())
          );
        }
        
        if (filteredPackages.length > 0) {
          // Process image URLs to ensure they have the correct base URL
          const processedPackages = filteredPackages.map(pkg => ({
            ...pkg,
            image: pkg.image.startsWith('http') ? pkg.image : `${baseUrl}${pkg.image.replace(/^\//, '')}`
          }));
          
          setDestination(name);
          setPackages(processedPackages);
        } else {
          setError(`No packages found for ${name}`);
        }
      } catch (err) {
        console.error('Error fetching destination data:', err);
        setError('Failed to load destination data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchDestinationData();
    }
  }, [name]);

  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Skeleton variant="rectangular" height={500} sx={{ mb: 4, borderRadius: '12px' }} />
        <Skeleton variant="text" height={80} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={40} sx={{ mb: 4 }} />
        
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} variant="rectangular" height={200} sx={{ mb: 4, borderRadius: '12px' }} />
        ))}
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>
        <Typography variant="h4" component="h1" gutterBottom>
          Destination Not Found
        </Typography>
        <Typography variant="body1">
          Sorry, we couldn't find any information about this destination. Please try another destination or contact us for assistance.
        </Typography>
      </Container>
    );
  }

  // Display the first package's details
  const featuredPackage = packages[0];

  const handleTermsChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleBookingClick = () => {
    // Navigate to WhatsApp with a pre-filled message
    const message = `Hi, I'm interested in booking the ${featuredPackage.title} package.`;
    const whatsappUrl = `https://wa.me/918882433407?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box>
      <HeroImage sx={{ backgroundImage: `url(${featuredPackage.image})` }}>
        <HeroText>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Explore {destination}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {featuredPackage.duration}
          </Typography>
        </HeroText>
      </HeroImage>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <StyledPaper>
              <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
                About {destination}
              </Typography>
              <Typography variant="body1" paragraph>
                {featuredPackage.description}
              </Typography>
            </StyledPaper>

            <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 3, color: 'primary.main' }}>
              Itinerary
            </Typography>

            {featuredPackage.itinerary.map((day) => (
              <Accordion key={day.id} sx={{ mb: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ backgroundColor: 'primary.main', color: 'white' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TodayIcon sx={{ mr: 2 }} />
                    <Typography variant="h6">
                      DAY {day.day_number}: {day.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {day.description.split('●').map((point, index) => {
                    if (index === 0 && !point.trim()) return null;
                    return (
                      <Box key={index} sx={{ display: 'flex', mb: 2 }}>
                        {index > 0 && (
                          <Typography 
                            variant="body1" 
                            sx={{ mr: 1, color: 'primary.main', fontWeight: 'bold' }}
                          >
                            ●
                          </Typography>
                        )}
                        <Typography variant="body1">
                          {point.trim()}
                        </Typography>
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
                CANCELLATION
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="● Cancellation Four-week prior of Arrival Date: 25% of trip cost" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="● Cancellation Three-week prior of Arrival Date: 50% of trip cost" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="● Cancellation Two-week prior of Arrival Date: 75% of trip cost" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="● Cancellation with Two week or No Show: 100% of trip cost" 
                  />
                </ListItem>
              </List>
            </StyledPaper>



            {packages.length > 1 && (
              <StyledPaper sx={{ mt: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                  More {destination} Packages
                </Typography>
                <Grid container spacing={2}>
                  {packages.slice(1).map((pkg) => (
                    <Grid item xs={12} key={pkg.id}>
                      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100%' }}>
                        <CardMedia
                          component="img"
                          sx={{ width: { xs: '100%', sm: 120 }, height: { xs: 140, sm: 'auto' } }}
                          image={pkg.image}
                          alt={pkg.title}
                        />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h6">
                            {pkg.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" component="div">
                            {pkg.duration}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </StyledPaper>
            )}
          </Grid>
        </Grid>

        {/* Terms & Conditions Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
            Terms & Conditions
          </Typography>
          
          <TermsContainer>
            <Typography variant="h6" gutterBottom>
              Terms & Conditions :-
            </Typography>
            <Typography variant="body2" paragraph>
              On booking a trip with us your client(s) must be able to understand the risks and hazards 
              that are involved in our activities and must be physically and mentally prepared for the 
              same. Any existing medical problems should be mentioned at the time of reservation so 
              that we can give the necessary guidance for a suitable trip.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              THINGS TO REMEMBER :
            </Typography>
            <Typography variant="body2" component="div">
              <ul>
                <li>
                  All baggage and belongings are entirely at the client(s) own risk at all times and 
                  we will not take responsibility for loss, damage or accident to any luggage or property.
                </li>
                <li>
                  The client(s) remain at all times responsible for their personal safety. In the event of 
                  illness, accident, emergency medical evacuation either by foot, vehicle, helicopter 
                  or otherwise, the responsibility for the payment of such costs lies with the client(s) 
                  and should be paid directly.
                </li>
                <li>
                  We will not be liable for consequences of modifications in the planned itinerary as 
                  a result of unforeseen and not controllable circumstances in the travel area, such 
                  as weather conditions, strikes, wars, riots or any untoward incidents. Possible 
                  changes are made in consultation with the client(s). The final decision will be in 
                  the best and safest interest of the client(s). Any extra costs, such as hotel / 
                  guesthouse accommodation, flights, transfers, etc. that are the result of these 
                  modifications, must be paid for directly by the client(s) at that time.
                </li>
                <li>
                  The hotels are subject to their availability. In case they are not available, the 
                  travelers will be accommodated in a property of similar standard.
                </li>
                <li>
                  All entry tickets for stupas, monasteries, sightseeing, state and entry fees, 
                  monument entrances, camera charges, etc. are not a part of the package.
                </li>
                <li>
                  Any kind of drink (alcoholic, aerated, or mineral water) is not included in the 
                  package cost.
                </li>
                <li>
                  Transportation during the trip would be in Non AC & Non-Heater vehicles. Please 
                  wear clothes according to the weather while traveling.
                </li>
                <li>
                  Guidelines issued by the State-Government are to be followed. Social distancing to 
                  be maintained. Frequent hand sanitization and use of mask recommended.
                </li>
                <li>
                  ID proof is mandatory for each individual guest at the time of booking, and also 
                  upon arrival. PAN card will not be considered as a valid address proof.
                </li>
              </ul>
            </Typography>
          </TermsContainer>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={termsAccepted} 
                  onChange={handleTermsChange} 
                  color="primary"
                />
              }
              label="I have read and agree to the Terms & Conditions"
            />
            
            <BookingButton 
              variant="contained" 
              disabled={!termsAccepted}
              onClick={handleBookingClick}
              size="large"
            >
              Book Now
            </BookingButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DestinationPage; 
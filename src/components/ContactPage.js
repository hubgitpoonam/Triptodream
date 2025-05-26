import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PageTitle = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '40px 0',
  textAlign: 'center',
  marginBottom: '50px',
});

const ContactSection = styled(Box)({
  padding: '40px 0 80px',
});

const SocialIcon = styled(Box)({
  display: 'inline-flex',
  marginRight: '15px',
  cursor: 'pointer',
  color: '#666',
  '&:hover': {
    color: '#b8860b',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#b8860b',
  color: 'white',
  padding: '12px 30px',
  '&:hover': {
    backgroundColor: '#9e7609',
  },
});

const ContactPage = () => {
  return (
    <>
      <PageTitle>
        <Container>
          <Typography variant="h3" component="h1">
            Contact Us
          </Typography>
        </Container>
      </PageTitle>

      <ContactSection>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={5}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Contact Us
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ color: '#666', mt: 3 }}>
                Address
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', mb: 2 }}>
                D-015 Ground Floor Puri-81 High Street Sector 81 Faridabad, India 121002
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', mb: 3 }}>
                Haryana
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ color: '#666' }}>
                Toll Free Customer Care
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', mb: 2 }}>
                +91-92-20-16-14-14
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ color: '#666', mb: 3 }}>
                Need live support?
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', mb: 2 }}>
                info@vistamytrip.com
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ color: '#666', mb: 3 }}>
                Follow us on social media
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <SocialIcon component="a" href="#" target="_blank">
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon component="a" href="#" target="_blank">
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon component="a" href="#" target="_blank">
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon component="a" href="#" target="_blank">
                  <LinkedInIcon />
                </SocialIcon>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                Send a message
              </Typography>
              
              <Box component="form" noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Messages"
                      variant="outlined"
                      multiline
                      rows={6}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                      <StyledButton 
                        variant="contained"
                        size="large"
                        endIcon={<span>➔</span>}
                      >
                        Send a Messsage
                      </StyledButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
      
      <Box sx={{ bgcolor: '#0a1929', color: 'white', py: 4 }}>
        <Container>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={7}>
              <Box display="flex" alignItems="center">
                <Box component="img" src="/Images/email-icon.png" alt="" width={50} height={50} sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    Your Travel Journey Starts Here
                  </Typography>
                  <Typography variant="body2">
                    Sign up and we'll send the best deals to you
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex">
                <TextField
                  fullWidth
                  placeholder="Your Email"
                  variant="outlined"
                  sx={{ 
                    bgcolor: 'white',
                    borderRadius: '4px 0 0 4px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRight: 0,
                    }
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ 
                    bgcolor: '#b8860b',
                    borderRadius: '0 4px 4px 0',
                    '&:hover': {
                      bgcolor: '#9e7609',
                    }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage; 
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Alert, Snackbar, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { submitContactForm, resetContactForm, selectContactState } from '../features/contact/contactSlice';

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
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(selectContactState);
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  
  // Reset form on successful submission
  useEffect(() => {
    if (success) {
      setFormData({
        full_name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSnackbarOpen(true);
      
      // Reset the success state after 3 seconds
      const timer = setTimeout(() => {
        dispatch(resetContactForm());
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear field error when user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.full_name.trim()) errors.full_name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(submitContactForm(formData));
    }
  };
  
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  
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
                C-19, Bhagat Singh Colony, Ballabgarh, Faridabad - 121004, India
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', mb: 3 }}>
                Haryana
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ color: '#666' }}>
                Toll Free Customer Care
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', mb: 2 }}>
                +91-88-82-43-34-07
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ color: '#666', mb: 3 }}>
                Need live support?
              </Typography>
              
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', mb: 2 }}>
                info@incrediblepathways.com
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
              
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error.message || 'Failed to send message. Please try again.'}
                </Alert>
              )}
              
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="full_name"
                      variant="outlined"
                      value={formData.full_name}
                      onChange={handleChange}
                      error={!!fieldErrors.full_name}
                      helperText={fieldErrors.full_name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!fieldErrors.email}
                      helperText={fieldErrors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                      error={!!fieldErrors.subject}
                      helperText={fieldErrors.subject}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Messages"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!fieldErrors.message}
                      helperText={fieldErrors.message}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                      <StyledButton 
                        variant="contained"
                        size="large"
                        type="submit"
                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <span>➔</span>}
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send a Message'}
                      </StyledButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactPage; 
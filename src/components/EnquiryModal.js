import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Box, 
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  Grid, 
  IconButton, 
  TextField, 
  Typography,
  MenuItem,
  FormControl,
  Select,
  useMediaQuery,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { submitItineraryForm, resetItineraryForm, selectItineraryState } from '../features/itinerary/itinerarySlice';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '8px',
    maxWidth: '1000px',
    width: '100%',
  },
}));

const SendButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3161AD',
  color: 'white',
  padding: '10px 30px',
  borderRadius: '4px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#254785',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  borderBottom: '1px solid #eee',
}));

const StyledDateField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#3161AD',
    },
  },
});

const travellersOptions = [
  'Solo',
  'Couple',
  '2-4 People',
  '5-10 People',
  'More than 10 People'
];

const EnquiryModal = ({ open, onClose }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(selectItineraryState);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travellers, setTravellers] = useState('Solo');
  const [formData, setFormData] = useState({
    name: '',
    mobile_no: '',
    email: '',
    comments: ''
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  // Reset form on successful submission
  useEffect(() => {
    if (success) {
      resetForm();
      setSnackbarOpen(true);
      
      // Reset the success state after 3 seconds
      const timer = setTimeout(() => {
        dispatch(resetItineraryForm());
        if (onClose) onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [success, dispatch, onClose]);

  const resetForm = () => {
    setFormData({
      name: '',
      mobile_no: '',
      email: '',
      comments: ''
    });
    setStartDate('');
    setEndDate('');
    setTravellers('Solo');
    setFieldErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field error when user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleTravellersChange = (e) => {
    setTravellers(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    // Clear end date if start date is after it
    if (endDate && new Date(e.target.value) > new Date(endDate)) {
      setEndDate('');
    }
    
    // Clear field error when user selects
    if (fieldErrors.start_date) {
      setFieldErrors(prev => ({
        ...prev,
        start_date: ''
      }));
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    
    // Clear field error when user selects
    if (fieldErrors.end_date) {
      setFieldErrors(prev => ({
        ...prev,
        end_date: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.mobile_no.trim()) errors.mobile_no = 'Mobile number is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!startDate) errors.start_date = 'Start date is required';
    if (!endDate) errors.end_date = 'End date is required';
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Format the data according to the API requirements
      const itineraryData = {
        name: formData.name,
        mobile_no: formData.mobile_no,
        email: formData.email,
        start_date: startDate,
        end_date: endDate,
        travellers_count: travellers,
        comments: formData.comments || ''
      };
      
      // Dispatch the action to submit the form
      dispatch(submitItineraryForm(itineraryData));
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <StyledDialog 
        open={open} 
        onClose={onClose}
        fullScreen={fullScreen}
        aria-labelledby="enquiry-dialog-title"
      >
        <StyledDialogTitle id="enquiry-dialog-title">
          <Typography variant="h5" component="div" fontWeight="bold">
            Let's plan your next trip Get PDF Itinerary
          </Typography>
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={onClose} 
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
        
        <DialogContent sx={{ p: 3 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error.message || 'Failed to submit itinerary. Please try again.'}
            </Alert>
          )}
          
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Name:
                </Typography>
                <TextField
                  fullWidth
                  name="name"
                  placeholder="Enter Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!fieldErrors.name}
                  helperText={fieldErrors.name}
                  required
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Mobile No:
                </Typography>
                <TextField
                  fullWidth
                  name="mobile_no"
                  placeholder="Enter Mobile No"
                  variant="outlined"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  error={!!fieldErrors.mobile_no}
                  helperText={fieldErrors.mobile_no}
                  required
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Email Id:
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Enter Email Id"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!fieldErrors.email}
                  helperText={fieldErrors.email}
                  required
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Duration
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="date"
                      placeholder="Start Date"
                      variant="outlined"
                      value={startDate}
                      onChange={handleStartDateChange}
                      InputLabelProps={{ shrink: true }}
                      error={!!fieldErrors.start_date}
                      helperText={fieldErrors.start_date}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="date"
                      placeholder="End Date"
                      variant="outlined"
                      value={endDate}
                      onChange={handleEndDateChange}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ 
                        min: startDate // Disable dates before start date
                      }}
                      error={!!fieldErrors.end_date}
                      helperText={fieldErrors.end_date}
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Travellers Count?
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <Select
                    value={travellers}
                    onChange={handleTravellersChange}
                    displayEmpty
                  >
                    {travellersOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Comments
                </Typography>
                <TextField
                  fullWidth
                  name="comments"
                  placeholder="Leave a comment here"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <SendButton 
                  type="submit"
                  disabled={loading}
                  startIcon={loading && <CircularProgress size={20} color="inherit" />}
                >
                  {loading ? 'Sending...' : 'Send Details'}
                </SendButton>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </StyledDialog>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your itinerary request has been sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default EnquiryModal; 
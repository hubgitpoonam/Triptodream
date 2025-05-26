import React, { useState } from 'react';
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
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

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
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travellers, setTravellers] = useState('Solo');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine all form data
    const enquiryData = {
      ...formData,
      duration: {
        startDate,
        endDate
      },
      travellersCount: travellers
    };
    
    console.log('Submitting enquiry:', enquiryData);
    // Here you would typically send this data to your backend
    
    // Close the modal
    onClose();
  };

  return (
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
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Mobile No:
              </Typography>
              <TextField
                fullWidth
                name="mobile"
                placeholder="Enter Mobile No"
                variant="outlined"
                value={formData.mobile}
                onChange={handleChange}
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
              <SendButton type="submit">
                Send Details
              </SendButton>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default EnquiryModal; 
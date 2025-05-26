import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EnquiryModal from './EnquiryModal';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #eaeaea',
  position: 'sticky',
});

const ContactInfo = styled(Box)({
  backgroundColor: '#b8860b',
  color: '#fff',
  padding: '8px 0',
  textAlign: 'center',
});

const NavButton = styled(Button)({
  color: '#333',
  margin: '0 8px',
  '&:hover': {
    backgroundColor: 'rgba(184, 134, 11, 0.1)',
  },
});

const Logo = styled('img')({
  height: '50px',
  marginRight: '20px',
});

const EnquiryButton = styled(Button)({
  borderColor: '#b8860b',
  color: '#b8860b',
  '&:hover': {
    borderColor: '#8b6508',
    backgroundColor: 'rgba(184, 134, 11, 0.1)',
  },
});

const Header = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleOpenEnquiryModal = () => {
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      <ContactInfo>
        <Container>
          <Box display="flex" justifyContent="center" gap={3}>
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+91-92-20-16-14-14</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <WhatsAppIcon fontSize="small" />
              <Typography variant="body2">+91-92-20-16-14-14</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">support@vistamytrip.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">info@vistamytrip.com</Typography>
            </Box>
          </Box>
        </Container>
      </ContactInfo>
      <StyledAppBar>
        <Container>
          <Toolbar disableGutters>
            <Link to="/">
              <Logo src="/Images/logo.jpg" alt="Vista my trip" />
            </Link>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <NavButton component={Link} to="/">Home</NavButton>
              <NavButton component={Link} to="/weekend-getaways">Weekend Getaways</NavButton>
              <NavButton component={Link} to="/holiday-packages">Holiday Package</NavButton>
              <NavButton component={Link} to="/international">International Trips</NavButton>
              <NavButton component={Link} to="/corporate">Corporate Tours</NavButton>
              <NavButton component={Link} to="/blog">Blog</NavButton>
              <NavButton component={Link} to="/contact">Contact</NavButton>
            </Box>
            <EnquiryButton 
              variant="outlined"
              onClick={handleOpenEnquiryModal}
            >
              Enquiry Now
            </EnquiryButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Enquiry Modal */}
      <EnquiryModal 
        open={enquiryModalOpen} 
        onClose={handleCloseEnquiryModal} 
      />
    </Box>
  );
};

export default Header; 
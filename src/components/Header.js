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
  backgroundColor: '#730664',
  color: '#fff',
  padding: '8px 0',
  textAlign: 'center',
});

const NavButton = styled(Button)({
  color: '#333',
  margin: '0 8px',
  '&:hover': {
    backgroundColor: 'rgba(115, 6, 100, 0.1)',
  },
});

const Logo = styled('img')({
  height: '80px',
  width: '100px',
  marginRight: '20px',
});

const EnquiryButton = styled(Button)({
  borderColor: '#730664',
  color: '#730664',
  '&:hover': {
    borderColor: '#5a0550',
    backgroundColor: 'rgba(115, 6, 100, 0.1)',
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
              <Typography variant="body2">+91-88-82-43-34-07</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <WhatsAppIcon fontSize="small" />
              <Typography variant="body2">+91-88-82-43-34-07</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2"></Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">info@incrediblepathways.com</Typography>
            </Box>
          </Box>
        </Container>
      </ContactInfo>
      <StyledAppBar>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <Logo src="/Images/newlogo.png" alt="Incredible path way" />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NavButton component={Link} to="/">Home</NavButton>
              <NavButton component={Link} to="/weekend-getaways">Holiday Package</NavButton>
              {/* <NavButton component={Link} to="/holiday-packages">Holiday Package</NavButton> */}
              {/* <NavButton component={Link} to="/international">International Trips</NavButton>
              <NavButton component={Link} to="/corporate">Corporate Tours</NavButton> */}
              <NavButton component={Link} to="/blog">Blog</NavButton>
              <NavButton component={Link} to="/contact">Contact</NavButton>
              <EnquiryButton 
                variant="outlined"
                onClick={handleOpenEnquiryModal}
              >
                Enquiry Now
              </EnquiryButton>
            </Box>
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
import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterContainer = styled(Box)({
  backgroundColor: '#f5f5f5',
  paddingTop: '64px',
  paddingBottom: '32px',
});

const FooterLink = styled(Link)({
  color: '#666',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '8px',
  '&:hover': {
    color: '#b8860b',
  },
});

const FooterText = styled(Typography)({
  color: '#666',
  display: 'block',
  marginBottom: '8px',
});

const SocialIcon = styled(MuiLink)({
  color: '#666',
  marginRight: '16px',
  '&:hover': {
    color: '#b8860b',
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Company
            </Typography>
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Term and condition</FooterLink>
            <FooterLink to="/cancellation">Cancelation & Refund</FooterLink>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Weekend Trips
            </Typography>
            <FooterText variant="body2">Chopta Tungnath</FooterText>
            <FooterText variant="body2">Manali Sissu</FooterText>
            <FooterText variant="body2">Mcleodganj Tour Package</FooterText>
            <FooterText variant="body2">Kanatal Tour Package</FooterText>
            <FooterText variant="body2">Kasol Kheerganga Tour Package</FooterText>
            <FooterText variant="body2">Jibhi Tour Package</FooterText>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Domestic
            </Typography>
            <FooterText variant="body2">Himachal</FooterText>
            <FooterText variant="body2">Kashmir</FooterText>
            <FooterText variant="body2">Kerala</FooterText>
            <FooterText variant="body2">Rajasthan</FooterText>
            <FooterText variant="body2">Uttarakhand</FooterText>
            <FooterText variant="body2">Goa</FooterText>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              C-19, Bhagat Singh Colony, Ballabgarh, Faridabad - 121004, India
              <br/>
              Phone: +91-8882433407
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              info@incrediblepathways.com
            </Typography>
            <Box sx={{ mt: 2 }}>
              <SocialIcon href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="https://wa.me/918882433407 " target="_blank">
                <WhatsAppIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid #ddd' }}>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} IncrediblePathways All rights reserved.
            <MuiLink component={Link} to="/privacy" color="inherit" sx={{ mx: 1 }}>
              Privacy
            </MuiLink>
            <MuiLink component={Link} to="/terms" color="inherit" sx={{ mx: 1 }}>
              Terms
            </MuiLink>
            <MuiLink component={Link} to="/sitemap" color="inherit" sx={{ mx: 1 }}>
              Site Map
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 
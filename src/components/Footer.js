import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Term and condition</FooterLink>
            <FooterLink to="/cancellation">Cancelation & Refund</FooterLink>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Weekend Trips
            </Typography>
            <FooterLink to="/weekend/chopta">Chopta Tungnath</FooterLink>
            <FooterLink to="/weekend/manali">Manali Sissu</FooterLink>
            <FooterLink to="/weekend/mcleodganj">Mcleodganj Tour Package</FooterLink>
            <FooterLink to="/weekend/kanatal">Kanatal Tour Package</FooterLink>
            <FooterLink to="/weekend/kasol">Kasol Kheerganga Tour Package</FooterLink>
            <FooterLink to="/weekend/jibhi">Jibhi Tour Package</FooterLink>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Domestic
            </Typography>
            <FooterLink to="/domestic/himachal">Himachal</FooterLink>
            <FooterLink to="/domestic/kashmir">Kashmir</FooterLink>
            <FooterLink to="/domestic/kerala">Kerala</FooterLink>
            <FooterLink to="/domestic/rajasthan">Rajasthan</FooterLink>
            <FooterLink to="/domestic/uttarakhand">Uttarakhand</FooterLink>
            <FooterLink to="/domestic/goa">Goa</FooterLink>
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
              <SocialIcon href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" target="_blank">
                <YouTubeIcon />
              </SocialIcon>
              <SocialIcon href="https://wa.me/918882433407 " target="_blank">
                <WhatsAppIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid #ddd' }}>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Dream To Trip Pvt Ltd All rights reserved.
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
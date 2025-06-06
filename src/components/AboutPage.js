import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageTitle = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '40px 0',
  textAlign: 'center',
  marginBottom: '50px',
});

const ContentSection = styled(Box)({
  padding: '0 0 60px',
});

const StatBox = styled(Box)({
  textAlign: 'center',
  padding: '20px',
});

const StatNumber = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#0a1929',
  marginBottom: '8px',
});

const AboutPage = () => {
  return (
    <>
      <PageTitle>
        <Container>
          <Typography variant="h3" component="h1">
            About Us
          </Typography>
        </Container>
      </PageTitle>

      <ContentSection>
        <Container>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 3 }}>
            About IncrediblePathways
          </Typography>
          
          <Typography variant="body1" paragraph>
           IncrediblePathways is an online travel portal offering convenient booking services for holiday packages. Based in Faridabad, the company provides customized travel solutions for both inbound and outbound travelers. Their offerings include honeymoon packages, international and domestic tours, and adventure trips. They emphasize customer satisfaction by tailoring experiences to individual preferences.
          </Typography>
          
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
            Who We Are
          </Typography>
          <Typography variant="body1" paragraph>
            A passionate travel agency dedicated to crafting unforgettable journeys.
          </Typography>
          <Typography variant="body1" paragraph>
            Committed to turning your travel dreams into reality — whether it's a solo adventure, family vacation, or romantic getaway.
          </Typography>
          
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
            Our Mission:
          </Typography>
          <Typography variant="body1" paragraph>
            To make travel easy, affordable, and extraordinary for every explorer.
          </Typography>
          <Typography variant="body1" paragraph>
            Ensure personalized experiences tailored to your preferences and budget.
          </Typography>
          
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
            What We Offer:
          </Typography>
          <Typography variant="body1" paragraph>
            Tailored Itineraries: Fully customized plans to match your travel style.
          </Typography>
          <Typography variant="body1" paragraph>
            Flight & Hotel Bookings: Hassle-free reservations with the best deals.
          </Typography>
          <Typography variant="body1" paragraph>
            Adventure & Leisure Packages: From beach retreats to cultural immersions.
          </Typography>
          <Typography variant="body1" paragraph>
            Visa Assistance: Simplified guidance for international trips.
          </Typography>
          <Typography variant="body1" paragraph>
            24/7 Support: We're with you every step of the way.
          </Typography>
          
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
            Why Choose IncrediblePathways?
          </Typography>
          <Typography variant="body1" paragraph>
            Expert Guidance: Backed by travel specialists with deep destination knowledge.
          </Typography>
          <Typography variant="body1" paragraph>
            Budget-Friendly Deals: Premium experiences without breaking the bank.
          </Typography>
          <Typography variant="body1" paragraph>
            Customer-Centric Approach: Your satisfaction is our priority.
          </Typography>
          <Typography variant="body1" paragraph>
            Safety & Convenience: Stress-free planning, safe travel, and smooth transitions.
          </Typography>
          
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
            Our Vision:
          </Typography>
          <Typography variant="body1" paragraph>
            To be your go-to travel partner, making the world more accessible — one trip at a time.
          </Typography>
        </Container>
      </ContentSection>
    </>
  );
};

export default AboutPage; 
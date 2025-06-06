import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: '12px',
}));

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageTitle>
        <Container>
          <Typography variant="h3" component="h1">
            Privacy Policy
          </Typography>
        </Container>
      </PageTitle>

      <ContentSection>
        <Container>
          <StyledPaper>
            <Typography variant="h5" component="h2" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              At IncrediblePathways, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              We collect personal information such as your name, email address, phone number, and travel preferences when you make a booking, sign up for our newsletter, or contact us through our website. We may also collect non-personal information such as browser type, IP address, and device information to improve our services.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We use your information to process bookings, communicate with you about your travel arrangements, provide customer support, and send you relevant updates and offers. We may also use your data to improve our website, services, and marketing efforts.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Third-Party Disclosure
            </Typography>
            <Typography variant="body1" paragraph>
              We may share your information with trusted third parties such as hotels, airlines, and other travel service providers to fulfill your booking requirements. We do not sell or rent your personal information to third parties for marketing purposes.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, but disabling them may affect the functionality of our website.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Your Rights
            </Typography>
            <Typography variant="body1" paragraph>
              You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time. To exercise these rights, please contact us at info@incrediblepathways.com.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Changes to This Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised policy will be effective immediately upon posting.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions or concerns about our Privacy Policy, please contact us at info@incrediblepathways.com.
            </Typography>
          </StyledPaper>
        </Container>
      </ContentSection>
    </>
  );
};

export default PrivacyPolicyPage; 
import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
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

const CancellationPage = () => {
  return (
    <>
      <PageTitle>
        <Container>
          <Typography variant="h3" component="h1">
            Cancellation & Refund Policy
          </Typography>
        </Container>
      </PageTitle>

      <ContentSection>
        <Container>
          <StyledPaper>
            <Typography variant="h5" component="h2" gutterBottom>
              CANCELLATION :
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="● Cancellation Four-week prior of Arrival Date: 25% of trip cost" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="● Cancellation Three-week prior of Arrival Date: 50% of trip cost" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="● Cancellation Two-week prior of Arrival Date: 75% of trip cost" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="● Cancellation with Two week or No Show: 100% of trip cost" 
                />
              </ListItem>
            </List>
            
            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Refund Process
            </Typography>
            <Typography variant="body1" paragraph>
              All refunds will be processed within 7-14 business days from the date of cancellation approval. The refund will be issued to the original payment method used for booking.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Special Circumstances
            </Typography>
            <Typography variant="body1" paragraph>
              In case of unforeseen circumstances such as natural disasters, political unrest, or pandemic-related travel restrictions imposed by the government, we may offer more flexible cancellation terms or travel vouchers for future use.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Changes to Booking
            </Typography>
            <Typography variant="body1" paragraph>
              Changes to your booking, such as date modifications or traveler details, may be accommodated subject to availability and any price differences. Please contact us at least four weeks before your departure date to request changes.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Travel Insurance
            </Typography>
            <Typography variant="body1" paragraph>
              We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen cancellations, medical emergencies, and other travel-related risks.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mt: 3, fontStyle: 'italic' }}>
              For any queries regarding cancellations or refunds, please contact our customer support team at info@incrediblepathways.com or call us at +91-88-82-43-34-07.
            </Typography>
          </StyledPaper>
        </Container>
      </ContentSection>
    </>
  );
};

export default CancellationPage; 
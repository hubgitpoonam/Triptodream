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

const TermsAndConditionsPage = () => {
  return (
    <>
      <PageTitle>
        <Container>
          <Typography variant="h3" component="h1">
            Terms & Conditions
          </Typography>
        </Container>
      </PageTitle>

      <ContentSection>
        <Container>
          <StyledPaper>
            <Typography variant="h5" component="h2" gutterBottom>
              Terms & Conditions :-
            </Typography>
            <Typography variant="body1" paragraph>
              On booking a trip with us your client(s) must be able to understand the risks and hazards 
              that are involved in our activities and must be physically and mentally prepared for the 
              same. Any existing medical problems should be mentioned at the time of reservation so 
              that we can give the necessary guidance for a suitable trip.
            </Typography>
            
            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              THINGS TO REMEMBER :
            </Typography>
            <Typography variant="body1" component="div" sx={{ mt: 2 }}>
              <ul>
                <li>
                  All baggage and belongings are entirely at the client(s) own risk at all times and 
                  we will not take responsibility for loss, damage or accident to any luggage or property.
                </li>
                <li>
                  The client(s) remain at all times responsible for their personal safety. In the event of 
                  illness, accident, emergency medical evacuation either by foot, vehicle, helicopter 
                  or otherwise, the responsibility for the payment of such costs lies with the client(s) 
                  and should be paid directly.
                </li>
                <li>
                  We will not be liable for consequences of modifications in the planned itinerary as 
                  a result of unforeseen and not controllable circumstances in the travel area, such 
                  as weather conditions, strikes, wars, riots or any untoward incidents. Possible 
                  changes are made in consultation with the client(s). The final decision will be in 
                  the best and safest interest of the client(s). Any extra costs, such as hotel / 
                  guesthouse accommodation, flights, transfers, etc. that are the result of these 
                  modifications, must be paid for directly by the client(s) at that time.
                </li>
                <li>
                  The hotels are subject to their availability. In case they are not available, the 
                  travelers will be accommodated in a property of similar standard.
                </li>
                <li>
                  All entry tickets for stupas, monasteries, sightseeing, state and entry fees, 
                  monument entrances, camera charges, etc. are not a part of the package.
                </li>
                <li>
                  Any kind of drink (alcoholic, aerated, or mineral water) is not included in the 
                  package cost.
                </li>
                <li>
                  Transportation during the trip would be in Non AC & Non-Heater vehicles. Please 
                  wear clothes according to the weather while traveling.
                </li>
                <li>
                  Guidelines issued by the State-Government are to be followed. Social distancing to 
                  be maintained. Frequent hand sanitization and use of mask recommended.
                </li>
                <li>
                  ID proof is mandatory for each individual guest at the time of booking, and also 
                  upon arrival. PAN card will not be considered as a valid address proof.
                </li>
              </ul>
            </Typography>
          </StyledPaper>
        </Container>
      </ContentSection>
    </>
  );
};

export default TermsAndConditionsPage; 
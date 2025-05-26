import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled(Box)({
  position: 'relative',
  '.slick-dots': {
    bottom: '25px',
    '& li button:before': {
      color: '#fff',
    },
    '& li.slick-active button:before': {
      color: '#b8860b',
    },
  },
});

const SlideContent = styled(Box)({
  position: 'relative',
  height: '600px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

const SlideText = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  textAlign: 'center',
  width: '100%',
});

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      image: '/Images/kerela.jpg',
      title: 'Kerala',
      subtitle: 'Sail through serene backwaters in God\'s Own Country',
    },
    {
      image: '/Images/kashmir.jpg',
      title: 'Kashmir',
      subtitle: 'Experience the paradise on Earth',
    },
    {
      image: '/Images/Goa.jpg',
      title: 'Goa',
      subtitle: 'Sun, Sand and Serenity',
    },
  ];

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <SlideContent
              sx={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <SlideText>
                <Container maxWidth="md">
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 'bold',
                      marginBottom: 2,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 300,
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                </Container>
              </SlideText>
            </SlideContent>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default HeroSlider; 
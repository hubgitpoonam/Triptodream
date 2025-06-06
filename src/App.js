import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import TopDestinations from './components/TopDestinations';
import HolidaysByInterest from './components/HolidaysByInterest';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/blog/BlogPage';
import BlogDetail from './components/blog/BlogDetail';
import DestinationPage from './components/DestinationPage';
import WeekendGetawaysPage from './components/WeekendGetawaysPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import CancellationPage from './components/CancellationPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#730664', // Deep Purple
    },
    secondary: {
      main: '#333333',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '8px 24px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <HeroSlider />
                <TopDestinations />
                <HolidaysByInterest />
              </main>
            } />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/destinations/:name" element={<DestinationPage />} />
            <Route path="/weekend-getaways" element={<WeekendGetawaysPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
            <Route path="/cancellation" element={<CancellationPage />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

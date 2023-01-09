import { HelmetProvider } from 'react-helmet-async';

import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';
import Page from './components/Layout/Page';
import Portfolio from './components/Sections/Portfolio';
import Resume from './components/Sections/Resume';
import Testimonials from './components/Sections/Testimonials';

function App() {
  return (
    <HelmetProvider>
      <Page title="Dallas Johnson's Landing"
       description="A snapshot of Dallas's accomplishments, interests, and work life."
      >
        <Header />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Page>
    </HelmetProvider>
  );
}

export default App;

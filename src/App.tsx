import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';
//import Portfolio from './components/Sections/Portfolio';
import Testimonials from './components/Sections/Testimonials';
import Experience from './components/Sections/Experience';
import { ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      {/*<Portfolio />*/}
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;

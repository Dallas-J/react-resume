import { useState, useEffect } from 'react';

import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';
//import Portfolio from './components/Sections/Portfolio';
import Testimonials from './components/Sections/Testimonials';
import Experience from './components/Sections/Experience';
import { ScrollRestoration } from 'react-router-dom';
import { SectionId } from './data/data';
import {isApple, isMobile} from './config';

function App() {
  const [isIos, setIsIos] = useState(false);
  
  // Mobile iOS needs some special help
  useEffect(() => {
    setIsIos(!(isMobile && isApple));
  }, []);

  const viewportOffset = document.getElementById(SectionId.Testimonials)?.getBoundingClientRect();
  return (
    <>
      {isIos ?
      <>
        <div className='fixed -z-40 top-[-50vh] left-[-50%] right-[150%] bg-neutral-500 dark:bg-neutral-900' style={{ bottom: viewportOffset?.top }} />
        <div className='fixed -z-40 bottom-[150vh] left-[-50%] right-[150%] bg-neutral-500 dark:bg-neutral-900' style={{ top: viewportOffset?.bottom }} />
      </>
      : null}
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

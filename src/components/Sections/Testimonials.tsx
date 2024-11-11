import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, testimonial} from '../../data/data';
import {TestimonialProps} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const [isIos, setIsIos] = useState(false);

  const {testimonials} = testimonial;

  // iOS moves elements improperly when rubberbanding, so it requires a less fancy approach
  useEffect(() => {
    setIsIos(isMobile && isApple);
  }, []);

  // If no testimonials, don't render the section
  if (!testimonials.length) {
    return null;
  }
  
  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div className='flex w-full min-w-stop items-center justify-center px-4 py-16 md:py-24 lg:px-8 bg-fixed bg-cover bg-center bg-testimonial-light dark:bg-testimonial-dark'>
        <TestimonialSection testimonials={testimonials} />
      </div>
    </Section>
  );
});

const TestimonialSection: FC<{testimonials: TestimonialProps[]}> = memo(({testimonials}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setTestimonial = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );
  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 10000);

  return (
    <div className="w-full max-w-screen-md px-4 lg:px-0">
      <div className="flex flex-col items-center gap-y-6 rounded-xl bg-neutral-300/70 dark:bg-neutral-800/60 p-6 backdrop-blur shadow-lg">
        <div
          className="scrollbar-hide flex w-full snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
          onScroll={handleScroll}
          ref={scrollContainer}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <Testimonial isActive={isActive} key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            );
          })}
        </div>
        <div className="flex gap-x-4">
          {[...Array(testimonials.length)].map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                className={classNames(
                  'h-3 w-3 rounded-full bg-black dark:bg-neutral-200 transition-all duration-500 sm:h-4 sm:w-4',
                  isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                )}
                disabled={isActive}
                key={`select-button-${index}`}
                onClick={setTestimonial(index)}></button>
            );
          })}
        </div>
      </div>
    </div>
  );
});

const Testimonial: FC<{testimonial: TestimonialProps; isActive: boolean}> = memo(
  ({testimonial: {text, name, position, link, image}, isActive}) => (
    <div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      {image ? (
        <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
          <QuoteIcon className="absolute -top-2 -left-2 h-4 w-4 stroke-black text-black dark:text-white" />
          <a href={link} target='_blank' rel='noreferrer'>
            <img className="h-full w-full rounded-full" src={image} alt="Referrer headshot" />
          </a>
        </div>
      ) : (
        <QuoteIcon className="h-5 w-5 shrink-0 text-black dark:text-white sm:h-8 sm:w-8" />
      )}
      <div className="flex flex-col gap-y-4">
        <p className="prose prose-sm font-medium italic text-black dark:text-gray-200 sm:prose-base">{text}</p>
        <p className="text-xs italic text-black dark:text-white sm:text-sm md:text-base lg:text-lg">— {name}, {position}</p>
      </div>
    </div>
));

export default Testimonials;

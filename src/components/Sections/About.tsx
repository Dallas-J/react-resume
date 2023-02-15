import {memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About = memo(() => {
  const {description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-100 dark:bg-neutral-800" sectionId={SectionId.About}>
      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-4'>
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="h-24 w-24 rounded-xl md:h-32 md:w-32 bg-cover bg-center bg-profile border-2 border-orange-500"/>
        </div>
        <div className='col-span-1 flex flex-col gap-y-6 md:col-span-3'>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-black dark:text-white">About me</h2>
            <div className="prose-sm sm:prose-base text-gray-800 dark:text-gray-300">{description}</div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-black dark:text-white" />}
                <span className="text-sm font-bold text-black dark:text-white">{label}:</span>
                <span className=" text-sm text-gray-800 dark:text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;

import {memo} from 'react';
import classNames from 'classnames';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About = memo(() => {
  const {description, aboutItems, actions} = aboutData;
  return (
    <Section className="mb-[-6rem] md:mb-[-10rem] bg-neutral-100 dark:bg-neutral-800" sectionId={SectionId.About}>
      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-5 pt-8'>
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="h-24 w-24 rounded-2xl md:h-32 md:w-32 bg-cover bg-center bg-profile border-2 border-orange-500"/>
        </div>
        <div className='col-span-1 flex flex-col gap-y-6 md:col-span-4'>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-black dark:text-white">About me</h2>
            <div className="prose-sm sm:prose-base text-black dark:text-gray-200">{description}</div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-black dark:text-white" />}
                <span className="text-sm font-bold text-black dark:text-white">{label}:</span>
                <span className=" text-sm text-black dark:text-gray-200">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex w-full justify-center gap-x-4 pt-2 md:col-span-5">
          {actions.map(({href, text, primary, link, Icon}) => (
            link ?
            <a
              className={classNames(
                'flex gap-x-2 rounded-full border-2 bg-orange-500 dark:bg-neutral-800 py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-orange-400 hover:border-orange-400 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
              )}
              href={href}
              key={text}>
              {text}
              {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
            </a>
            :
            <div
              className={classNames(
                'flex gap-x-2 rounded-full border-2 bg-none dark:bg-neutral-800 py-2 px-4 text-sm font-medium text-black dark:text-stone-100 ring-offset-gray-700/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base hover:cursor-pointer',
                primary ? 'border-orange-500 ring-orange-500' : 'border-stone-800 ring-stone-800 dark:border-white dark:ring-white',
              )}
              onClick={() => document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })}
              key={text}
            >
              {text}
              {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;

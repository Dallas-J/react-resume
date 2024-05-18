import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero = memo(() => {
  const {name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="flex min-h-screen w-full min-w-stop items-center justify-center bg-neutral-100 dark:bg-neutral-800 bg-cover bg-center bg-hero">
        <div className="max-w-screen-lg px-0 sm:px-4 pt-16 sm:pt-[72px] sm:pb-4">
          <div className="flex flex-col items-center gap-y-6 sm:rounded-xl bg-gray-300/75 dark:bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-stone-900 dark:text-stone-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, link, Icon}) => (
                link ?
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-stone-900 dark:text-stone-100 ring-offset-gray-700/80 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
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
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-stone-900 dark:text-stone-100 ring-offset-gray-700/80 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base hover:cursor-pointer',
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
        </div>
        <div className="invisible tall:visible absolute min-w-stop inset-x-0 bottom-6 flex justify-center">
          <div
            className="rounded-full bg-neutral-100 dark:bg-neutral-800 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2 hover:cursor-pointer"
            onClick={() => document.getElementById(SectionId.About)?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDownIcon className="h-8 w-8 bg-transparent sm:h-6 sm:w-6 text-black dark:text-white" />
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;

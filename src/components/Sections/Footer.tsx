import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-500 dark:bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <div
        className="rounded-full bg-neutral-400 dark:bg-neutral-100 p-1 ring-orange-600 ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2 hover:cursor-pointer"
        onClick={() => document.getElementById(SectionId.Hero)?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8 text-white dark:text-black" />
      </div>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-200 dark:text-neutral-500">
        <Socials />
      </div>
      <span className="text-sm text-neutral-400 dark:text-neutral-700">Copyright © 2023 Dallas Johnson</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;

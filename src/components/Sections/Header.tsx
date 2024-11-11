import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {FC, memo, useCallback, useMemo, useState} from 'react';
import { Link } from 'react-router-dom';

import {SectionId, SectionIdProps} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionIdProps | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Experience, /*SectionId.Portfolio,*/ SectionId.Testimonials, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionIdProps | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  const [isDark, setDark] = useState(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
  if (isDark) {
    document.getElementById('htmlTop')?.classList.add('dark')
  } else {
    document.getElementById('htmlTop')?.classList.remove('dark')
  }
  const persistDark = (isDark: boolean) => {
    localStorage.theme = isDark ? 'dark' : 'light';
    setDark(isDark);
  };

  return (
    <DesktopNav currentSection={currentSection} navSections={navSections} isDark={isDark} persistDark={persistDark} />
  );
});

const DesktopNav: FC<{navSections: SectionIdProps[]; currentSection: SectionIdProps | null; isDark: boolean; persistDark: Function}> = memo(
  ({navSections, currentSection, isDark, persistDark}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 hover:text-orange-500 dark:hover:text-orange-500';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-black dark:text-neutral-100');
    return (
      <header className="flex flex-row items-center justify-between fixed top-0 z-50 w-full bg-neutral-300/60 dark:bg-neutral-900/40 p-4 backdrop-blur" id={headerID}>
        <div className='text-2xl font-bold text-black dark:text-white pl-4'>Dallas's Landing</div>
        <div className="flex flex-row items-center">
          <nav className="hidden md:flex justify-center gap-x-8 px-8">
            {navSections.map(section => (
              <NavItem
                activeClass={activeClass}
                current={section === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                section={section}
              />
            ))}
          </nav>
          <DarkModeToggle isDark={isDark} onClick={() => persistDark(!isDark)}/>
        </div>
      </header>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => (
  // Once https://github.com/w3c/csswg-drafts/issues/3744 is resolved, reimplement with smooth scrolling
  <Link to={`#${section}`} className={classNames(current ? activeClass : inactiveClass)} key={section} onClick={onClick}>
    {section}
  </Link>
));

const DarkModeToggle: FC<{
  className?: string;
  isDark: boolean;
  onClick: () => void;
}> = memo(({className, isDark, onClick}) => (
  <button className='rounded-lg hover:transition-colors hover:duration-300 focus:outline-none text-neutral-900 dark:text-neutral-100 hover:text-orange-500 dark:hover:text-orange-500' onClick={onClick}>
    {isDark ?
    <MoonIcon className={classNames("h-8 w-8", className)} />
    :
    <SunIcon className={classNames("h-8 w-8", className)} />
    }
  </button>
))

Header.displayName = 'Header';
export default Header;

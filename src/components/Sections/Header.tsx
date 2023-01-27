import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';
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
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} isDark={isDark} persistDark={persistDark} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionIdProps[]; currentSection: SectionIdProps | null; isDark: boolean; persistDark: Function}> = memo(
  ({navSections, currentSection, isDark, persistDark}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header className="flex-row justify-between fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:flex" id={headerID}>
        <div className='h-8 w-8' />
        <nav className="flex justify-center gap-x-8">
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
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionIdProps[]; currentSection: SectionIdProps | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
    const activeClass = classNames(baseClass, 'bg-neutral-500 dark:bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-300 dark:hover:bg-stone-600');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed top-2 right-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}
        >
          <Bars3BottomRightIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-400/75 dark:bg-stone-900/75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-stone-200 dark:bg-stone-800">
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
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
  <button className='rounded-lg hover:transition-colors hover:duration-300 focus:outline-none text-white hover:text-orange-500' onClick={onClick}>
    {isDark ?
    <MoonIcon className={classNames("h-8 w-8", className)} />
    :
    <SunIcon className={classNames("h-8 w-8", className)} />
    }
  </button>
))

Header.displayName = 'Header';
export default Header;

import classNames from 'classnames';
import {ReactNode, memo} from 'react';

import {SectionIdProps} from '../../data/data';

interface SectionProps {
  children?: ReactNode;
  sectionId: SectionIdProps;
  sectionTitle?: string;
  noPadding?: boolean;
  className?: string;
}

const Section = memo(({children, sectionId, noPadding = false, className}:SectionProps) => {
    return (
      <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8 min-w-stop': !noPadding})} id={sectionId}>
        <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;

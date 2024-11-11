import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ExperienceSection from './ExperienceSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Experience: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white" sectionId={SectionId.Experience}>
      <div className='p-8 rounded-3xl border border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-700'>
        <div className="flex flex-col divide-y-2 divide-neutral-700 dark:divide-neutral-300">
          <ExperienceSection title="Skills">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </ExperienceSection>
          <ExperienceSection title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ExperienceSection>
          <ExperienceSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ExperienceSection>
        </div>
      </div>
    </Section>
  );
});

Experience.displayName = 'Resume';
export default Experience;

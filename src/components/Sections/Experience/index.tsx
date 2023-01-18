import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ExperienceSection from './ExperienceSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Experience: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.Experience}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ExperienceSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ExperienceSection>
        <ExperienceSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ExperienceSection>
        <ExperienceSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ExperienceSection>
      </div>
    </Section>
  );
});

Experience.displayName = 'Resume';
export default Experience;

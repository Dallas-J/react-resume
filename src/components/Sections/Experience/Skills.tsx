import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col m-2">
      <strong className="font-bold mb-2 border-b border-neutral-400">{name}</strong>
      {skills.map((skill, index) => (index === skills.length - 1 ? 'and ' + skill + '.' : skill + ', '))}
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

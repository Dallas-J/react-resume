import {FC, memo} from 'react';

import {TimelineItemProps} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemProps}> = memo(({item}) => {
  const {title, date, company, team, content} = item;
  return (
    <div className="flex flex-col pb-8 text-left last:pb-0 text-black dark:text-gray-200">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-center md:text-left text-black dark:text-white">{company} – {title}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 md:justify-start">
          {team ? 
          <>
            <span className="flex-none text-center italic">{team}</span>
            <span className='px-1 hidden md:inline'>•</span>
          </>
          : null}
          <span className='flex-none text-center italic'>{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;

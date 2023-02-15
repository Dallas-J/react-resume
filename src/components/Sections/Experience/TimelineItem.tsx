import {FC, memo} from 'react';

import {TimelineItemProps} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemProps}> = memo(({item}) => {
  const {title, date, company, team, content} = item;
  return (
    <div className="flex flex-col pb-8 text-left last:pb-0 text-gray-800 dark:text-gray-300">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-center md:text-left text-black dark:text-white">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-none font-medium">{company}</span>
          {team ? 
          <>
            <span className='px-1'>•</span>
            <span className="flex-none italic">{team}</span>
          </>
          : null}
          <span className='px-1'>•</span>
          <span className='flex-none italic'>{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;

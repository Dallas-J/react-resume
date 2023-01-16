import {FC, memo} from 'react';

import {TimelineItemProps} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemProps}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-left last:pb-0">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-center md:text-left">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-none text-sm font-medium italic">{location}</span>
          <span>•</span>
          <span className="flex-none text-sm">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;

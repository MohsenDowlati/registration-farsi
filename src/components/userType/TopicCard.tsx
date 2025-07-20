import React from 'react';
import Style from '@styles/topic.module.css';

// eslint-disable-next-line react/function-component-definition
const TopicCard: React.FC<danamit.TopicCardProps> = ({
  title,
  key,
  onSelect,
  isSelected = false,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div
      role="button"
      onClick={onSelect}
      key={key}
      className={`${Style.topicCard} ${
        isSelected ? Style.topicCardSelected : Style.topicCardUnselected
      }`}
    >
      <p className={Style.topicCardText} dir="rtl">
        {title}
      </p>
    </div>
  );
};

export default TopicCard;

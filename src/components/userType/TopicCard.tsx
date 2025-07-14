import React from 'react';
import Style from '@styles/topic.module.css';

interface TopicCardProps {
  title: string;
  key: string;
  // eslint-disable-next-line react/require-default-props
  onSelect?: (topic: never) => void;
  // eslint-disable-next-line react/require-default-props
  isSelected?: boolean;
}

// eslint-disable-next-line react/function-component-definition
const TopicCard: React.FC<TopicCardProps> = ({ title, key, onSelect, isSelected = false }) => {
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
      <p className={Style.topicCardText}>{title}</p>
    </div>
  );
};

export default TopicCard;

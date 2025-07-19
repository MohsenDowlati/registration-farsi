import React from 'react';
import { AcceptButton, RegNav, TopicCard } from '@/components';
import RegisterNavigation from '@common/navigation';
import Text from '@/constants';
import style from '@styles/topic.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopic, selectTopicSelection, selectSelectedTopicIndices } from '@/store/topicSlice';

const topics = [
  { id: 0, topic: 'math and physics' },
  { id: 1, topic: 'science and biology' },
  { id: 2, topic: 'history' },
  { id: 3, topic: 'literature' },
  { id: 4, topic: 'english language' },
  { id: 5, topic: 'intelligence and puzzles' },
  { id: 6, topic: 'comics and anime' },
  { id: 7, topic: 'computer and technology' },
  { id: 8, topic: 'art and painting' },
  { id: 9, topic: 'animal world' },
  { id: 10, topic: 'cinema and series' },
  { id: 11, topic: 'astronomy and space' },
  { id: 12, topic: 'sports' },
  { id: 13, topic: 'geography' },
  { id: 14, topic: 'computer games' },
  { id: 15, topic: 'economics' },
  { id: 16, topic: 'psychology and mind' },
  { id: 17, topic: 'music' },
  { id: 18, topic: 'characters' },
  { id: 19, topic: 'cultures and countries' },
];

// eslint-disable-next-line react/function-component-definition
const Topics: React.FC = () => {
  const dispatch = useDispatch();
  const isSelected = useSelector(selectTopicSelection);
  const selectedTopics = useSelector(selectSelectedTopicIndices);

  return (
    <section>
      <RegNav link={RegisterNavigation.register.UserType} />
      <h1 className={style.topicHeader} dir="rtl">
        {Text.topics['topics-header']}
      </h1>
      <h3 className={style.topicDescription} dir="rtl">
        {Text.topics['topics-description']}
      </h3>
      <div className={style.topicCardsContainer}>
        {topics.map((topic) => (
          <TopicCard
            key={`${topic.id}-topic`}
            title={
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              Text.topics[`topics-id${(topic.id + 1).toString()}`]
            }
            isSelected={isSelected[topic.id]}
            onSelect={() => dispatch(toggleTopic(topic.id))}
          />
        ))}
      </div>
      <AcceptButton link={RegisterNavigation.register.Email} isOK={selectedTopics.length !== 0} />
    </section>
  );
};

export default Topics;

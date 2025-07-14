import React from 'react';
import { AcceptButton, RegNav, TopicCard } from '@/components';
import RegisterNavigation from '@common/navigation';
import Text from '@/constants';

// eslint-disable-next-line react/function-component-definition
const Topics: React.FC = () => {
  const topics = [
    { id: 1, topic: 'math and physics' },
    { id: 2, topic: 'science and biology' },
    { id: 3, topic: 'history' },
    { id: 4, topic: 'literature' },
    { id: 5, topic: 'english language' },
    { id: 6, topic: 'intelligence and puzzles' },
    { id: 7, topic: 'comics and anime' },
    { id: 8, topic: 'computer and technology' },
    { id: 9, topic: 'art and painting' },
    { id: 10, topic: 'animal world' },
    { id: 11, topic: 'cinema and series' },
    { id: 12, topic: 'astronomy and space' },
    { id: 13, topic: 'sports' },
    { id: 14, topic: 'geography' },
    { id: 15, topic: 'computer games' },
    { id: 16, topic: 'economics' },
    { id: 17, topic: 'psychology and mind' },
    { id: 18, topic: 'music' },
    { id: 19, topic: 'characters' },
    { id: 20, topic: 'cultures and countries' },
  ];

  return (
    <section>
      <RegNav link={RegisterNavigation.UserType} />
      <h1>{Text.topics['topics-header']}</h1>
      <h3>{Text.topics['topics-description']}</h3>
      {topics.map((topic) => (
        <TopicCard
          key={`${topic.id}-topic`}
          title={
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            Text.topics[`topics-id${topic.id.toString()}`]
          }
        />
      ))}
      <AcceptButton link="" isOK />
    </section>
  );
};

export default Topics;

import React from 'react';
import VocabCard from './VocabCard';

const VocabCardList = ({ vocabs, onAdd, onCardClick }) => {
  return (
    <div className="wrap01">
      {vocabs.map((vocab) => (
        <VocabCard
          key={vocab.id}
          {...vocab}
          onAdd={() => onAdd(vocab.id)}
          onClick={() => onCardClick(vocab.id)}
        />
      ))}
    </div>
  );
};

export default VocabCardList;

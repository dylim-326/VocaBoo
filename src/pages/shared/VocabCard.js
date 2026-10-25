// src/pages/shared/VocabCard.js
import React from "react";

export default function VocabCard({ title, description, word_count, onAdd, onClick }) {
  return (
    <div className="vocab-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>단어 수: {word_count}</p>
      <button onClick={(e) => { e.stopPropagation(); onAdd(); }}>추가</button>
    </div>
  );
}

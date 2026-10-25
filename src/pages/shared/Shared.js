// src/pages/shared/Shared.js
import VocabCardList from "./VocabCardList";
import "../../css/Shared.css";

export default function Shared() {
  // 예시 단어장 3개
  const exampleVocabs = [
    { id: 1, title: "토익 단어장", description: "TOEIC 기본 어휘 모음", word_count: 120 },
    { id: 2, title: "일상 영어", description: "일상 회화 자주 쓰이는 표현", word_count: 80 },
    { id: 3, title: "여행 영어", description: "여행에서 유용한 표현 모음", word_count: 50 },
  ];

  const handleAdd = (id) => {
    console.log("추가:", id);
  };

  const handleCardClick = (id) => {
    console.log("클릭:", id);
  };

  return (
    <div className="shared-container">
      <h2>단어장 둘러보기</h2>
      <VocabCardList
        vocabs={exampleVocabs}
        onAdd={handleAdd}
        onCardClick={handleCardClick}
      />
    </div>
  );
}

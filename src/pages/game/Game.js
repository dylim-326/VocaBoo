import React, { useState } from "react";
import TodayVoca from "../../components/TodayVoca";
// import Sns from "../../components/Sns";
import "../../css/Game.css";

const Game = () => {
  const [onlyMyWordbook, setOnlyMyWordbook] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWordbook, setSelectedWordbook] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("단어장 이름을 입력해주세요!");
      return;
    }
    setSelectedWordbook(searchTerm + " (예시)");
  };

  const handleStart = () => {
    if (!selectedWordbook) {
      alert("단어장을 먼저 선택해주세요!");
      return;
    }
    alert(`"${selectedWordbook}" 단어장으로 게임을 시작합니다!`);
  };

  return (
    <div className="game-wrap">
      <div className="wrap">
        <section>
          <TodayVoca />
        </section>

        <div className="game-box">
          <h2 className="game-title">암기 게임</h2>
          <hr />
          <br />
          <div className="write">
            <div id="check">
              <label>
                <input
                  type="checkbox"
                  checked={onlyMyWordbook}
                  onChange={(e) => setOnlyMyWordbook(e.target.checked)}
                />
                내 단어장에서만 찾기
              </label>
            </div>

            <div id="choose">
              <label htmlFor="selectedWordbook">학습할 단어장</label>
              <input
                type="text"
                id="selectedWordbook"
                value={selectedWordbook}
                readOnly
                placeholder="선택된 단어장이 표시됩니다"
              />

              <label htmlFor="search">단어장 검색</label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="단어장 이름 입력"
              />
              <button type="button" onClick={handleSearch}>
                검색
              </button>
            </div>

            <div id="game">
              <p>게임 유형 선택</p>
              <div id="btn">
                <button>
                  카드 짝 맞추기
                </button>
                <button onClick={() => alert("현재는 카드 짝 맞추기만 지원됩니다.")} style={{ opacity: 0.4 }}>
                  단어 대전 (준비 중)
                </button>
              </div>
            </div>

            <button id="submit" type="submit" onClick={handleStart}>
              Start
            </button>
          </div>
        </div>

        {/* <Sns /> */}
      </div>
    </div>
  );
};

export default Game;

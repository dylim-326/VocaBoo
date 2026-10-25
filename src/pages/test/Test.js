import React, { useState } from "react";
import TodayVoca from "../../components/TodayVoca";
// import Sns from "../../components/Sns";
import "../../css/Test.css";

const Test = () => {
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
    <div className="test-wrap">
      <div className="wrap">
        <section>
          <TodayVoca />
        </section>

        <div className="test-box">
          <h2 className="test-title">시험 보기</h2>
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

            <div id="test">
              <p>문항 수</p>
              <div id="btn">
                <input type="number" placeholder="문항 수" />
                <select multiple>
                  <option>영어만</option>
                  <option>뜻만</option>
                  <option>랜덤</option>
                </select>
              </div>
            </div>

            <button id="submit" type="button" onClick={handleStart}>
              시험지/답지 생성
            </button>
          </div>
        </div>

        {/* <Sns /> */}
      </div>
    </div>
  );
};

export default Test;

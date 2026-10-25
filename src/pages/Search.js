import React, { useState, useEffect } from "react";
import { fetchWord } from "../services/dictionary";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("word") || "";   // 🔹 URL에서 검색어 가져오기

  const [query, setQuery] = useState(initialQuery);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearched(true); 
    setLoading(true);
    setError(null);
    setResult(null);

    const res = await fetchWord(query.trim());
    setLoading(false);

    if (res.ok) setResult(res.data);
    else setError(res.error);
  };

  // 🔹 Main에서 검색어 전달되면 자동으로 검색 실행
  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
  }, [initialQuery]);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>

      <style>
        {`
          @keyframes slideUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>

      <h3 style={{ textAlign: "center", marginTop: "60px"}}>📗 단어 검색</h3>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색할 단어 입력"
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            background: "#6fa782ff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          검색
        </button>
      </div>

      {!isSearched && (
        <p
          style={{
            fontFamily: '"Bagel Fat One", system-ui',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "50px",
            color: "rgba(97, 170, 115, 1)",
            textAlign: "center",
            marginBottom: "40px",
            opacity: 0,
            animation: "slideUp 0.8s ease-out forwards",
          }}
        >
          궁금한 단어를<br/>검색해 보세요!
        </p>
      )}

      {loading && <p>검색 중...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "16px",
            background: "#f9f9f9",
          }}
        >
          <h3 style={{ marginBottom: "8px" }}>{result.word}</h3>
          {result.phonetic && (
            <p style={{ color: "#555", marginBottom: "8px" }}>
              [{result.phonetic}]
            </p>
          )}
          {result.audio && (
            <audio src={result.audio} controls style={{ marginBottom: "10px" }} />
          )}

          <ul style={{ paddingLeft: "20px" }}>
            {result.meanings.map((m, i) => (
              <li key={i}>
                <strong>{m.partOfSpeech}</strong>: {m.definitions.join("; ")}
              </li>
            ))}
          </ul>

          {/* 단어장에 추가 버튼은 현재 주석 유지 */}
        </div>
      )}
    </div>
  );
}

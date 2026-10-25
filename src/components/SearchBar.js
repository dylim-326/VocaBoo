export default function SearchBar({ value, onChange, onSearch, loading }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <input
        type="text"
        placeholder="검색할 단어 입력"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? "검색중..." : "검색"}
      </button>
    </div>
  );
}

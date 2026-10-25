import { useState } from 'react';
import { fetchWord } from '../services/dictionary';
import SearchBar from './SearchBar';
import ResultCard from './ResultCard';

export default function SearchInVocab({ onAdd }) {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!q.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const out = await fetchWord(q.trim());
      if (!out.ok) setError(out.error);
      else setResult(out.data);
    } catch (e) {
      setError(e?.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    if (!result) return;
    onAdd(result); // 부모 VocabDetail에 전달
  };

  return (
    <div>
      <SearchBar value={q} onChange={setQ} onSearch={handleSearch} loading={loading} />
      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
      <ResultCard result={result} onAdd={handleAdd} />
    </div>
  );
}

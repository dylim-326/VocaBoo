export default function ResultCard({ result, onAdd }) {
  if (!result) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h4>{result.word} {result.phonetic && `(${result.phonetic})`}</h4>
      {result.meanings.map((m, idx) => (
        <div key={idx}>
          <strong>{m.partOfSpeech}</strong>
          <ul>
            {m.definitions.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
      {result.audio && <audio src={result.audio} controls />}
      <button onClick={onAdd} style={{ marginTop: 5 }}>단어 추가</button>
    </div>
  );
}

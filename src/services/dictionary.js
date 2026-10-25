// 단어 검색용 fetch 함수 예시 (예: 무료 오픈 API 사용)
export async function fetchWord(word) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!res.ok) return { ok: false, error: "단어를 찾을 수 없습니다." };
    const data = await res.json();
    // 필요한 데이터 가공
    const first = data[0];
    return {
      ok: true,
      data: {
        word: first.word,
        phonetic: first.phonetic || "",
        meanings: first.meanings.map(m => ({
          partOfSpeech: m.partOfSpeech,
          definitions: m.definitions.map(d => d.definition)
        })),
        audio: first.phonetics?.[0]?.audio || ""
      }
    };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

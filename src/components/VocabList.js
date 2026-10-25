// VocabList.js
import { useNavigate } from 'react-router-dom';
import '../css/VocabList.css';

export default function VocabList({ vocabs = [], items = [], onDelete, onRemove }) {
  const navigate = useNavigate();

  // 단어장 리스트용 vocabs, 단어 리스트용 items
  const list = vocabs.length ? vocabs : items;

  return (
    <div className='vocab-list'>
      {list.length === 0 ? (
        <p>아직 항목이 없습니다.</p>
      ) : (
        list.map(v => (
          <div key={v.id || v.word} className='vocab-card'>
            {vocabs.length ? (
              <>
                <div className='card-content' onClick={() => navigate(`/myvocab/${v.id}`)}>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
                <button id='delete' onClick={() => onDelete(v.id)}>삭제</button>
              </>
            ) : (
              <>
                <div className='card-content'>
                  <h4>{v.word}</h4>
                  <p>{v.meanings?.map(m => m.definitions.join(', ')).join('; ')}</p>
                </div>
                <button id='delete' onClick={() => onRemove(v.word)}>삭제</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

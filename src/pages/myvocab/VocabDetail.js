import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SearchInVocab from '../../components/SearchInVocab';
import VocabList from '../../components/VocabList';
import '../../css/VocabDetail.css';

export default function VocabDetail(){
    const {id} = useParams();
    const [vocab, setVocab] = useState(null);  // 단어장 정보
    const [wordList, setWordList] = useState([]);  // 해당 단어장 단어 목록

    useEffect(() => {
        const allVocabs = JSON.parse(localStorage.getItem("vocabs") || "[]");
        const currentVocab = allVocabs.find(v => v.id === Number(id));
        if (currentVocab) setVocab(currentVocab);

        const savedWords = JSON.parse(localStorage.getItem(`words_${id}`) || "[]");
        setWordList(savedWords);
    }, [id]);

    const addWord = (wordObj) =>{
        if (!wordObj) return;
        if (wordList.some(w => w.word.toLowerCase() === wordObj.word.toLowerCase())) return;
        const newList = [wordObj, ...wordList];
        setWordList(newList);
        localStorage.setItem(`words_${id}`, JSON.stringify(newList));
    };

    const removeWord = (word) => {
        const newList = wordList.filter(w => w.word.toLowerCase() !== word.toLowerCase());
        setWordList(newList);
        localStorage.setItem(`words_${id}`, JSON.stringify(newList));
    };

    if(!vocab) return <div>단어장을 찾을 수 없습니다.</div>

    return(
        <div className="vocab-detail-page">
            <h3>{vocab.title}</h3>
            <p>{vocab.desc}</p>

            <SearchInVocab onAdd={addWord} />
            <VocabList items={wordList} onRemove={removeWord} />
        </div>
    );
}
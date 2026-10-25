import {useState, useEffect} from 'react';
import TodayVoca from '../components/TodayVoca';
import VocabList from '../components/VocabList';
import VocabForm from '../components/VocabForm';
import '../css/MyVocab.css';

export default function MyVocab(){
    const [vocabs, setVocabs] = useState(() => {
        const saved = localStorage.getItem("vocabs");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("vocabs", JSON.stringify(vocabs));
    }, [vocabs]);
    
    // 단어장 추가
    const addVocab = (newVocab) => {
        setVocabs([...vocabs, {id: Date.now(), ...newVocab}]);
    };
    // 단어장 삭제
    const deleteVocab = (id) => {
        setVocabs(vocabs.filter(v => v.id !== id));
        localStorage.removeItem(`words_${id}`);
    };

    return(
        <div className="myvocab-page">
            <div className="myvocab">
                <h3 className="title">나의 단어장</h3>
            </div>
            <TodayVoca />
            <VocabForm onSubmit={addVocab} vocabs={vocabs} />
            <VocabList vocabs={vocabs} onDelete={deleteVocab} />
        </div>
    );
}
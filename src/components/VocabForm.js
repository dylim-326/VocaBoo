import {useState} from 'react';
import '../css/VocabForm.css';

export default function VocabForm({vocabs, onSubmit}){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTitle = title.trim();
        if(!title.trim()) return alert("단어장 제목을 입력하세요");
        // 중복 체크
        const isDuplicate = vocabs.some(v => v.title === trimmedTitle);
        if(isDuplicate) return alert("이미 존재하는 단어장 제목입니다.");
        onSubmit({title: trimmedTitle, desc});
        setTitle("");
        setDesc("")
    };

    return(
        <form className="vocab-form" onSubmit={handleSubmit}>
            <input 
                id='title-input'
                type='text'
                placeholder='  단어장 제목'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                id='desc-input'
                type='text'
                placeholder='  설명 (선택)'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <button id='add-btn' type='submit'>추가</button>
        </form>
    );
}

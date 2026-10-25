import '../css/Main.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TodayVoca from '../components/TodayVoca';
import Sns from '../components/Sns';

export default function Main(){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleMainSearch = () => {
        if (!query.trim()) return;
        navigate(`/search?word=${query.trim()}`);
    };

    const ChangePage = [
        {id: 1, link: '/myvocab', img: '/images/study_boo.png', name: '나의 단어장', desc: '나만의 단어장 만들러 Go!👉'},
        {id: 2, link: '/game', img: '/images/game_boo.png', name: '암기 게임', desc: '단어 게임으로 암기력 강화 👉'},
        {id: 3, link: '/test', img: '/images/test_boo.png', name: '시험 보기', desc: '맞춤형 시험 제공 👉'}
    ];

    const PopularVoca = [
        {id: 1, link: '/shared', img: '/images/vocab1.png', user: '@cloud02님', title: '"토익 990 완성 단어"'},
        {id: 2, link: '/shared', img: '/images/vocab2.png', user: '@xeeeow님', title: '"원서 속 핵심 영단어 정리"'},
        {id: 3, link: '/shared', img: '/images/vocab3.png', user: '@qklel00님', title: '"하루 한 페이지"'}
    ];

    return(
        <main>

            {/* 검색창 */}
            <div className="searchbar">
                <input 
                    className="searchbox" 
                    type="text" 
                    placeholder="  검색할 단어 입력 (한/영)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleMainSearch()}
                />
                <button 
                    className="searchbutton"
                    onClick={handleMainSearch}
                >
                    검색
                </button>
            </div>

            {/* 오늘의 단어 */}
            <TodayVoca />

            {/* SNS 배너 */}
            <Sns />

            {/* 카드 섹션 */}
            <div className="container">
                {ChangePage.map((it) => (
                    <Link to={it.link} key={it.id}>
                        <div className="card" id={it.id}>
                            <div className="front">
                                <img src={process.env.PUBLIC_URL + it.img} alt={it.img} />
                                <h3>{it.name}</h3>
                            </div>
                            <div className="back">
                                <p>{it.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* 인기 단어장 */}
            <div className="popular">
                <h3 id="populartext">지금 인기 있는 단어장 Top3!</h3>
                <div className="wrap01">
                    {PopularVoca.map((voca) => (
                        <Link to={voca.link} key={voca.id}>
                            <div className="vocab">
                                <img className="vocaimg" src={process.env.PUBLIC_URL + voca.img} alt="단어장" />
                                <div className="vocab-text">
                                    <p>{voca.user}</p>
                                    <p>{voca.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <br />
                <Link id="lookaround" to="/shared">단어장 둘러보기 →</Link>
            </div>

        </main>
    );
}

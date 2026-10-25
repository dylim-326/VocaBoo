import '../css/Header.css';
import {NavLink} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <h2 className='logo'><NavLink to='/'>Vocaboo</NavLink></h2>
            <nav>
                <NavLink to='/search'>단어 검색</NavLink>
                <NavLink to='/game'>암기 게임</NavLink>
                <NavLink to='/myvocab'>나의 단어장</NavLink>
                <NavLink to='/shared'>단어장 둘러보기</NavLink>
                <NavLink to='/test'>시험 보기</NavLink>
                <NavLink to='/notice'>공지·문의</NavLink>
            </nav>
            <div className='login'>
                <NavLink to='/login'>로그인</NavLink>
                {/* <NavLink to='/manager'>관리자모드</NavLink> */}
            </div>
        </header>
    );
}
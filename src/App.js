import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// 공통 컴포넌트
import Header from './components/Header';
import Footer from './components/Footer';

// 페이지
import Main from './pages/Main';
import MyVocab from './pages/MyVocab';
import VocabDetail from './pages/myvocab/VocabDetail';
import NoticeLayout from './pages/notice/NoticeLayout';
import NoticeIndex from './pages/notice/NoticeIndex';
import NoticeNotice from './pages/notice/NoticeNotice';
import NoticeQna from './pages/notice/NoticeQna';
import LogIn from './pages/LogIn';
import Search from './pages/Search'; 
import Game from './pages/game/Game';
import Shared from './pages/shared/Shared';
import Test from './pages/test/Test';

// 마이페이지 / 관리자 페이지
import MyLayout from './mypage/MyLayout';
import MyOverview from './mypage/MyOverview';
import MyProfile from './mypage/MyProfile';
import AdminLayout from './mypage/AdminLayout';
import AdminUser from './mypage/AdminUser';
import AdminProduct from './mypage/AdminProduct';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const nav = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
    nav('/');
  };

  return (
    <div className="App">
      <Header />

      <nav>
        <Link to="/">홈</Link>
        <Link to="/search">단어검색</Link>
        <Link to="/myvocab">나의 단어장</Link> 
        <Link to="/game">암기게임</Link> {/* 🔹 기존 <h3> 암기게임 </h3> 대신 실제 페이지로 연결 */}
        <Link to="/shared">단어장 둘러보기</Link>
        <Link to="/test">시험보기</Link>

        {!isLoggedIn && <Link to="/login">로그인</Link>}
        {isLoggedIn && user.role === "user" && <Link to="/mypage">마이페이지</Link>}
        {isLoggedIn && user.role === "admin" && <Link to="/admin">관리자</Link>}
        {isLoggedIn && <button onClick={handleLogout}>로그아웃</button>}
      </nav>

      <main className="main">
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<Main />} />

          {/* 단어 검색 */}
          <Route path="/search" element={<Search />} /> 

          {/* 🔹 암기 게임 페이지 연결 */}
          <Route path="/game" element={<Game />} />

          {/* 나의 단어장 */}
          <Route path="/myvocab" element={<MyVocab />} />
          <Route path="/myvocab/:id" element={<VocabDetail />} />
          
          {/* 단어장 둘러보기, 시험보기 (아직 미구현) */}
          <Route path="/shared" element={<Shared />} />
          <Route path="/test" element={<Test />} />

          {/* 공지사항 / QnA */}
          <Route path="/notice" element={<NoticeLayout />}>
            <Route index element={<NoticeIndex />} />
            <Route path="notice" element={<NoticeNotice />} />
            <Route path="qna" element={<NoticeQna />} />
          </Route>

          {/* 로그인 */}
          <Route 
            path="/login" 
            element={<LogIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} 
          />

          {/* 마이페이지 */}
          {isLoggedIn && user.role === "user" && (
            <Route path="/mypage/*" element={<MyLayout />}>
              <Route index element={<MyOverview user={user} />} />
              <Route path="profile" element={<MyProfile user={user} />} />
            </Route>
          )}

          {/* 관리자 페이지 */}
          {isLoggedIn && user.role === "admin" && (
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route index element={<AdminUser />} />
              <Route path="product" element={<AdminProduct />} />
            </Route>
          )}

          {/* 404 */}
          <Route path="/*" element={<h3>페이지를 찾을 수 없습니다.</h3>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LogIn.css';

export default function LogIn({ setIsLoggedIn, setUser }) {
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const nav = useNavigate();

  const handleLogin = () => {
    if (!name || !pw) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    // 관리자 로그인 조건
    if (name === 'admin' && pw === '1234') {
      setIsLoggedIn(true);
      setUser({ name: 'admin', role: 'admin' });
      alert("관리자로 로그인되었습니다.");
      nav('/admin');
    } 
    // 일반 사용자
    else {
      setIsLoggedIn(true);
      setUser({ name, role: 'user' });
      alert(`${name}님 환영합니다!`);
      nav('/mypage');
    }
  };

  return (
    <div className="LogIn">
      <div className='login-part'>
        <div>
          <label>아이디: </label>
          <input 
            type="text" 
            placeholder='  아이디를 입력하세요'
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>비밀번호: </label>
          <input 
            type="password" 
            placeholder='  비밀번호를 입력하세요'
            value={pw} 
            onChange={(e) => setPw(e.target.value)} 
          />
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button onClick={handleLogin}>로그인</button>
        </div>
      </div>
      <div className='boo'>
        <img src={process.env.PUBLIC_URL + "/images/login_page_boo.png"} alt="boo" />
      </div>
    </div>
  );
}
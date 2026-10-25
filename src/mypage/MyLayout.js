import {Link, Outlet} from 'react-router-dom';

export default function MyLayout(){
    return(
        <div>
            <h3>마이페이지</h3>
            <nav>
                <Link to="/mypage">개요</Link>
                <Link to="/mypage/profile">프로필</Link>
            </nav>
            <Outlet />
        </div>
    );
}
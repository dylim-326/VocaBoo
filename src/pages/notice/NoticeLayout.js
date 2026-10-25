import {Link, useLocation, Outlet} from "react-router-dom";
import '../../css/NoticeLayout.css';

export default function NoticeLayout(){
    const {pathname} = useLocation();
    const onNotice = pathname.startsWith('/notice');

    return(
        <div className="NoticeLayout">
            <br /><br /><br />
            <h2>공지·문의</h2>
            <hr id='hr'/>

            {/* 2차메뉴 - 소개 라우팅일 때만 */}
            {onNotice && (
                <nav className="submenu">
                    <Link to="/notice/notice">공지</Link>
                    <Link to="/notice/qna">문의</Link>
                </nav>
            )}

            <Outlet />
        </div>
    );
}